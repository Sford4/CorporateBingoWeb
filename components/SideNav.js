import { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

import { COLORS } from '../styles/masterStyles.js';

// context imports
import { UserContext } from '../contexts/userContext';

// Component imports
import LoadingSpinner from '../components/LoadingSpinner';

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

    if(!user.id){
        return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LoadingSpinner size={50} color={COLORS.primary} thickness={4} />
        </div>)
    }

    return (
        <div id='sidenav' style={{ borderRight: `2px solid ${COLORS.primary}` }}>
            <img 
                alt='Bingo Builder' 
                // src={'/static/bingoBuilderLogo.png'} 
                src={'https://ofscienceandswords.com.au/media/image/29/52/99/everemore-loho_600x600.png'}
                style={{ width: '90%', margin: '10px 0 10px 0' }}
                onError={addDefaultPic}
            />
            <Link href='/joinGame'><a className='sidenavLink' style={currRoute && currRoute.includes('joinGame') ? styles.currLink : styles.link}>JOIN GAME</a></Link>
            {user && user.roleLevel < 3 && <Link href='/manageBoards'><a className='sidenavLink' style={currRoute && currRoute.includes('manageBoards') ? styles.currLink : styles.link}>MANAGE QUESTS</a></Link>}
            {user && user.roleLevel < 3 && <Link href='/usersAndOrg'><a className='sidenavLink' style={currRoute && currRoute.includes('usersAndOrg') ? styles.currLink : styles.link}>USERS & ORG</a></Link>}
            {user && user.roleLevel !== 2 && <Link href='/profile'><a className='sidenavLink' style={currRoute && currRoute.includes('profile') ? styles.currLink : styles.link}>MY PROFILE</a></Link>}
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