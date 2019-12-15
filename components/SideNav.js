import { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

import { COLORS } from '../styles/masterStyles.js';

// context imports
import { UserContext } from '../contexts/userContext';

const SideNav = (props) => {

    const router = useRouter()

    const { user, logout } = useContext(UserContext);
    const [ currRoute, setCurrRoute ] = useState(router.pathname);

    const handleRouteChange = url => {
        setCurrRoute(url);
    }
    router.events.on('routeChangeStart', handleRouteChange)

    const handleRouteChangeComplete = url => {
        setCurrRoute(url);
    }
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    const addDefaultPic = (ev) => {
        ev.target.src = "https://i.ytimg.com/vi/bKcF7JUbCpo/maxresdefault.jpg";
    };

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
                src={'/static/bingoBuilderLogo.png'} 
                style={{ width: '90%', margin: '10px 0 10px 0' }}
                onError={addDefaultPic}
            />
            <Link href='/joinGame'><a className='sidenavLink' style={currRoute && currRoute.includes('joinGame') ? styles.currLink : styles.link}>JOIN GAME</a></Link>
            {user && user.role.level < 3 && <Link href='/manageBoards'><a className='sidenavLink' style={currRoute && currRoute.includes('manageBoards') ? styles.currLink : styles.link}>MANAGE BOARDS</a></Link>}
            {user && user.role.level < 3 && <Link href='/usersAndOrg'><a className='sidenavLink' style={currRoute && currRoute.includes('usersAndOrg') ? styles.currLink : styles.link}>USERS & ORG</a></Link>}
            {user && user.role.level !== 2 && <Link href='/profile'><a className='sidenavLink' style={currRoute && currRoute.includes('profile') ? styles.currLink : styles.link}>MY PROFILE</a></Link>}
            <a className='sidenavLink' style={{color: COLORS.primary, cursor: 'pointer', padding: 10}} onClick={() => handleLogoutClick()}>LOGOUT</a>
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
                        padding: 0 .5%;
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

const styles = {
    link: {
        color: COLORS.primary,
        padding: 10,
    },
    currLink: {
        color: 'white',
        backgroundColor: COLORS.primary,
        padding: 10,
        textAlign: 'center',
        borderRadius: 20,
    }
  };

export default SideNav;