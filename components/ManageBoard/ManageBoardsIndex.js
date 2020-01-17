import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'

// context imports
import { ManageBoardsContext } from '../../contexts/manageBoardsContext';

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// component imports
import Layout from '../Layout';
import ManageBoardContainer from './ManageBoardContainer';
import LoadingSpinner from '../LoadingSpinner';


const ManageBoardsIndex = (props) => {
    const router = useRouter()
    
    const { contextBoard, getBoard, setStuffToSave, stuffToSave, saveBoard } = useContext(ManageBoardsContext);

  const [board, setBoard] = useState({});
  const [changesToSave, setChangesToSave] = useState(false)

  useEffect(() => {
    if(!contextBoard.id){
        getBoard(router.query.boardID);
    } else {
        setBoard(contextBoard);
    }
    if(changesToSave){
        setStuffToSave(true)
    }
}, [contextBoard, changesToSave])

  
if(board && board.id){
    return (
          <Layout>
            <div style={styles.container}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{ ...MASTER.pageTitle }}>MANAGING BOARD: {board.title}</div>
                    {stuffToSave ?
                    <button 
                        style={{ ...MASTER.wideRoundBtn, width: 150, margin: 0 }} 
                        onClick={() => saveBoard()}
                        className='pulse-btn'
                    >
                        <div style={MASTER.wideRoundBtnText}>SAVE</div>
                    </button> :
                    <button 
                        style={{ ...MASTER.wideRoundBtn, width: 150, margin: 0, backgroundColor: 'gray' }} 
                    >
                        <div style={MASTER.wideRoundBtnText}>SAVE</div>
                    </button>}
                </div>
                <ManageBoardContainer board={board} changesMade={setChangesToSave} />
            </div>
            <style jsx>
                {`
                    .pulse-btn {
                      animation: shadow-pulse 1.5s infinite;
                    }
                    @keyframes shadow-pulse{
                        0% {
                            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
                        }
                        100% {
                            box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
                        }
                    }
                `}
            </style>
        </Layout>


      
    );
}
  return (
    <Layout>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LoadingSpinner size={100} color={COLORS.primary} thickness={5} />
        </div>
    </Layout>
  )
}
  
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
};

export default ManageBoardsIndex;