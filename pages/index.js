import React from 'react';

import UserContextProvider from '../contexts/userContext';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'

// context imports
import { UserContext } from '../contexts/userContext';

const Index = () => {

    const { user, storeUser, logout } = useContext(UserContext);

    const router = useRouter()

    useEffect(() => {
        if(!user && localStorage.getItem('bingo_user') && localStorage.getItem('bingo_token')){
            storeUser(JSON.parse(localStorage.getItem('bingo_user')));
            router.push('/home');
        } else if(!localStorage.getItem('bingo_token') || !user){
            logout();
            router.push('/login');
        } else {
            router.push('/home');
        }
    },[user])
 

    return (
        <div>
            <p>Loading...</p>
        </div>
    )
  };
  
  export default Index;