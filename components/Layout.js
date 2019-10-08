import React, { useState, useEffect, useContext } from 'react';
import SideNav from './SideNav';
import { loadGetInitialProps } from '../node_modules/next/dist/next-server/lib/utils';

// context imports
import UserContextProvider from '../contexts/userContext';
import OrgContextProvider from '../contexts/orgContext';
import { UserContext } from '../contexts/userContext';

const Layout = (props => {

    const { user, storeUser, logout } = useContext(UserContext);

    useEffect(() => {
        if(!user._id && localStorage.getItem('bingo_user') && localStorage.getItem('bingo_token')){
            storeUser(JSON.parse(localStorage.getItem('bingo_user')));
        } else if(!localStorage.getItem('bingo_token') || !user){
            logout();
        }
    },[user])

    return (
        <div id='layout'>
            <SideNav />
            <div className='child-component-container'>
                {props.children}
            </div>
            <style jsx>
                {`
                    #layout {
                        display: flex;
                        flex-direction: row;
                        height: 100vh;
                        width: 100vw;
                        font: roboto;
                    }
                    .child-component-container {
                        padding: 20px;
                        width: 100%;
                    }
                `}
            </style>
        </div>
    )
});

export default Layout;