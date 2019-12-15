import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../constants/constants';

export const JoinGameContext = createContext();

const JoinGameContextProvider = (props) => {
    const router = useRouter();

    const [ accessBoards, setAccessBoards ] = useState([]);
    const [ foundBoards, setFoundBoards ] = useState([]);
    const [ usedBoardIDs, setUsedBoardIDs ] = useState([]);
    const [ usedGameIDs, setUsedGameIDs ] = useState([]);

    const getAccessBoards = async (userID) => {
        console.log('getting access boards', userID)
        try {  
            const request = await fetch(`${FULL_URL}/games/user/${userID}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
                })
                const result = await request.json();
                console.log({result})
                setAccessBoards(result.games);
                setUsedGameIDs(result.gameIDs);
                setUsedBoardIDs(result.boardIDs);
        } catch(err) {alert(err)}
    }

    const findBoards = async (accessCode) => {
        try {
            const request = await fetch(`${FULL_URL}/games/search`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
                body: JSON.stringify({
                    accessCode,
                    gamesAlreadyFound: usedGameIDs,
                    boardsAlreadyFound: usedBoardIDs,
                })
              })
              const success = await request.json();
              console.log({success})
              if(success.error){
                  alert(success.error.message);
                  return;
              }
              if(success){
                setFoundBoards(success);
              } else {
                  alert('There was a problem finding the game you searched for... please try again later!')
              }

        } catch(err) {alert(err)}
        
    }


    return (
        <JoinGameContext.Provider 
            value={{ 
                accessBoards, 
                getAccessBoards, 
                foundBoards, 
                findBoards,
                setFoundBoards
            }}>
            {props.children}
        </JoinGameContext.Provider>
    )
}

export default JoinGameContextProvider;