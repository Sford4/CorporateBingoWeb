import React, { createContext, useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../constants/constants';

export const PlayContext = createContext();

const PlayContextProvider = (props) => {

    const [ contextGame, setContextGame ] = useState({});

    const getGame = async (gameID, userID) => {
        if(gameID && contextGame.id === gameID){
            console.log('go with same game', contextGame, gameID)
            return;
        }
        console.log({gameID})
        if(gameID && userID){
            try {
                const request = await fetch(`${FULL_URL}/games/${gameID}/${userID}`, {
                    method: 'POST',
                    // headers: {
                    //     'Accept': 'application/json',
                    //     'Content-Type': 'application/json',
                    //     'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                    // },
                    })
                    const game = await request.json();
                    console.log({game})
                    setContextGame(game);
            } catch(err) {alert(err)}
        }
    }

    const saveGame = async (game) => {
        setContextGame(game);
        console.log('SAVING GAME');
        try {
            const request = await fetch(`${FULL_URL}/games/update/${contextGame.id}`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
                body: JSON.stringify({
                    id: game.id,
                    startTime: game.startTime,
                    squares: game.squares,
                    rewards: game.rewards
                })
              })
              const success = await request.json();
              console.log({success})
              if(success){
                setContextGame({ 
                    ...game, 
                    rewards: success.rewards,
                    squares: success.squares
                });
              } else {
                  alert('There was a problem saving your board... please try again later!')
              }

        } catch(err) {alert(err)}
        
    }


    return (
        <PlayContext.Provider 
            value={{ 
                contextGame, 
                updateGame: setContextGame, 
                getGame, 
                saveGame
            }}>
            {props.children}
        </PlayContext.Provider>
    )
}

export default PlayContextProvider;