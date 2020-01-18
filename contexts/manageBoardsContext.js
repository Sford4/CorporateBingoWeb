import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../constants/constants';
const uuidv4 = require('uuid/v4');

export const ManageBoardsContext = createContext();

const ManageBoardsContextProvider = (props) => {
    const router = useRouter();

    const [ contextBoard, setContextBoard ] = useState({});
    const [ gamesForBoard, setGamesForBoard ] = useState([]);
    const [ stuffToSave, setStuffToSave ] = useState(false);
    const [ saving, setSaving ] = useState(false);

    const newBoard = async (orgID) => {
        try {
            const request = await fetch(`${FULL_URL}/boards`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
                body: JSON.stringify({
                    orgID: orgID
                })
              })
              const boardID = await request.json();
              console.log({boardID})
              router.push(`/manageBoards/${boardID}`);

        } catch(err) {alert(err)}
    }

    const getBoard = async (boardID) => {
        if(boardID && contextBoard.id === boardID){
            console.log('go with same board', contextBoard, boardID)
            return;
        }
        try {
            const request = await fetch(`${FULL_URL}/boards/${boardID}`, {
                method: 'POST',
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                //     'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
                })
                const board = await request.json();
                setContextBoard(board);
        } catch(err) {alert(err)}
    }

    const saveBoard = async () => {
        console.log('SAVING');
        setSaving(true);
        if(contextBoard.useTeams){
            const teamsNoFrontendIDs = contextBoard.teams.map(team => {
                if(!team.id || team.id.includes('team')){
                    return {
                        name: team.name,
                        accessCode: team.accessCode,
                        id: uuidv4()
                    }
                }
                return team
            })
            contextBoard.teams = teamsNoFrontendIDs;
        }
        try {
            const request = await fetch(`${FULL_URL}/boards/update/${contextBoard.id}`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
                body: JSON.stringify({
                    ...contextBoard,
                    modified: new Date(),
                })
              })
              const success = await request.json();
              console.log({success})
              setSaving(false);
              if(success){
                setStuffToSave(false);
                setContextBoard(success);
              } else {
                  alert('There was a problem saving your board... please try again later!')
              }

        } catch(err) {alert(err)}
        
    }

    const getAllGamesForBoard = async boardID => {
        try {
            const request = await fetch(`${FULL_URL}/boards/gamesForBoard/${boardID}`, {
                method: 'GET',
                // headers: {
                //         'Accept': 'application/json',
                //         'Content-Type': 'application/json',
                //         'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                //     },
                })
                const games = await request.json();
                setGamesForBoard(!games.length ? ['none'] : games);
        } catch(err) {alert(err)}
    }


    return (
        <ManageBoardsContext.Provider 
            value={{ 
                contextBoard, 
                updateBoard: setContextBoard, 
                getBoard, 
                newBoard, 
                setStuffToSave,
                stuffToSave,
                saveBoard,
                getAllGamesForBoard,
                gamesForBoard,
                saving,
            }}>
            {props.children}
        </ManageBoardsContext.Provider>
    )
}

export default ManageBoardsContextProvider;