import React, { useState, useEffect, useContext } from 'react';
import SideNav from './SideNav';

// context imports
import { UserContext } from '../contexts/userContext';
import { OrgContext } from '../contexts/orgContext';

const Layout = (props => {

    const { user, storeUser, logout } = useContext(UserContext);
    const { org, getOrg } = useContext(OrgContext);

    useEffect(() => {
        if(!user.id && localStorage.getItem('bingo_user') && localStorage.getItem('bingo_token')){
            storeUser(JSON.parse(localStorage.getItem('bingo_user')));
        } else if(!localStorage.getItem('bingo_token') || !user){
            logout();
        }
        if(user && user.org && !org){
            getOrg(user.org);
        }
    },[user]);

    if(!user || !user.id){
        return <div>loading</div>
    }

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