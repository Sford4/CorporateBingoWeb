import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

import { COLORS } from '../styles/masterStyles.js';

// context imports
import { UserContext } from '../contexts/userContext';

const SideNav = (props) => {

    const { user, storeUser, logout } = useContext(UserContext);

    const router = useRouter()

    const handleLogoutClick = () => {
        logout();
    }

    if(!user._id){
        return <span>LOADING...</span>
    }

    return (
        <div id='sidenav' style={{ borderRight: `2px solid ${COLORS.primary}` }}>
            <img 
                alt='Bingo Builder' 
                src={'../static/bingoBuilderLogo.png'} 
                style={{ width: '90%', margin: '10px 0 10px 0' }}
            />
            <Link href='/joinGame'><a className='sidenavLink' style={{color: COLORS.primary}}>JOIN GAME</a></Link>
            {user && user.role.level < 3 && <Link href='/manageBoards'><a className='sidenavLink' style={{color: COLORS.primary}}>MANAGE BOARDS</a></Link>}
            {user && user.role.level < 3 && <Link href='/usersAndOrg'><a className='sidenavLink' style={{color: COLORS.primary}}>USERS & ORG</a></Link>}
            {user && user.role.level !== 2 && <Link href='/profile'><a className='sidenavLink' style={{color: COLORS.primary}}>MY PROFILE</a></Link>}
            <a className='sidenavLink' style={{color: COLORS.primary, cursor: 'pointer'}} onClick={() => handleLogoutClick()}>LOGOUT</a>
            <style jsx>
                {`
                    #sidenav {
                        width: 20%;
                        max-width: 300px;
                        min-width: 200px;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        box-shadow: 2px 0 5px -2px #999;
                        background-color: white;
                        font: roboto;
                    }
                    .sidenavLink {
                        width: 90%;
                        text-align: left;
                        margin: 20px 0 0 0;
                        text-decoration: none;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    
                `}
            </style>
        </div>
    )
}



export default SideNav;