import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export const ManageBoardsContext = createContext();

const ManageBoardsContextProvider = (props) => {
    const router = useRouter();

    const [ contextBoard, setContextBoard ] = useState({});
    const [ stuffToSave, setStuffToSave ] = useState(false);

    useEffect(() => {
        console.log('there\'s stuff to save!')
    }, [stuffToSave])

    const getBoard = async (boardID) => {
        if(boardID && contextBoard._id === boardID){
            console.log('go with same board', contextBoard, boardID)
            return;
        }
        try {
            const request = await fetch(`http://localhost:8000/boards/${boardID}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
                })
                const board = await request.json();
                setContextBoard(board);
        } catch(err) {alert(err)}
    }

    const newBoard = async (orgID) => {
        try {
            const request = await fetch(`http://localhost:8000/boards`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
                body: JSON.stringify({
                    orgID: orgID
                })
              })
              const boardID = await request.json();
              router.push(`/manageBoards/${boardID}`);

        } catch(err) {alert(err)}
    }

    const saveBoard = async () => {
        console.log('SAVING');
        try {
            const request = await fetch(`http://localhost:8000/boards/${contextBoard._id}`, {
                method: 'PATCH',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
                body: JSON.stringify({
                    ...contextBoard
                })
              })
              const success = await request.json();
              console.log({success})
              if(success){
                setStuffToSave(false);
              } else {
                  alert('There was a problem saving your board... please try again later!')
              }

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
                saveBoard
            }}>
            {props.children}
        </ManageBoardsContext.Provider>
    )
}

export default ManageBoardsContextProvider;