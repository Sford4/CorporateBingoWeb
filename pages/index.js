import React from 'react';

import UserContextProvider from '../contexts/userContext';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'

// context imports
import { UserContext } from '../contexts/userContext';

// Component imports
import LoadingSpinner from '../components/LoadingSpinner';

// Style imports
import { COLORS } from '../styles/masterStyles';

const Index = () => {

    const { user, storeUser, logout } = useContext(UserContext);

    const router = useRouter()

    useEffect(() => {
        if(!user && localStorage.getItem('bingo_user') && localStorage.getItem('bingo_token')){
            storeUser(JSON.parse(localStorage.getItem('bingo_user')));
            router.push('/joinGame');
        } else if(!localStorage.getItem('bingo_token') || !user){
            logout();
            router.push('/login');
        } else {
            router.push('/joinGame');
        }
    },[user])
 

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LoadingSpinner size={100} color={COLORS.primary} thickness={5} />
        </div>
    )
  };
  
  export default Index;