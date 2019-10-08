import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [ user, setUser ] = useState({});
      
    const router = useRouter();

    const storeUserAndToken = user => {
        if(!user.token && !localStorage.getItem('bingo_token')){
            alert('Something went wrong logging you in, please try again!');
            return;
        }
        if(localStorage){
            if(user.token){
                localStorage.setItem('bingo_token', user.token);
            }
            localStorage.setItem('bingo_user', JSON.stringify({
                userName: user.userName,
                email: user.email,
                role: user.role,
                _id: user._id,
            }));
            setUser({
                userName: user.userName,
                email: user.email,
                role: user.role,
                _id: user._id,
            })
        } else {
            alert('Something went wrong logging you in, please try again!');
            return;
        }
    }

    const logout = () => {
        localStorage.clear();
        setUser({});
        router.push('/login');
    }


    return (
        <UserContext.Provider value={{ user, updateBoard: setUser, storeUser: storeUserAndToken, logout: logout }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;