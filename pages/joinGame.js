import React, { useState, useEffect } from 'react';

// Style imports
import { MASTER, COLORS } from '../styles/masterStyles';

// component imports
import Link from 'next/link';
import Layout from '../components/Layout';

const dummyBoards = [{
  title: 'Orientation',
  id: '10er8vhj20',
  accessCode: 'asdfasdf',
  groups: {
    useTeams: true,
  },
  numSquares: 16,
  timeLimit: null,
}]

const BoardFind = (props) => {

  const [findCode, setFindCode] = useState('');
  const [boards, setBoards] = useState([]);

  const searchForBoard = () => {
    setFindCode('');
    setBoards(dummyBoards)
  }

  const generateBoardCards = boards => {
    return boards.map(board => {
      return (
        <Link href={`playGame/[boardID]`} as={`playGame/${board._id}`}>
            <button key={`board-${board._id}`} style={MASTER.card}>
            <div style={MASTER.cardInteriordiv}>
                <div style={{fontSize: 18, fontWeight: 'bold'}}>{board.title}</div>
                <div>{board.numSquares} Tasks</div>
                <div>{board.timeLimit ? "" : 'No time limit'}</div>
            </div>
            </button>
        </Link>
      )
    })
  }

  return (
      <Layout>
        <div style={styles.container}>
            <div style={MASTER.pageTitle}>FIND GAME</div>
            <div style={{ display: 'flex' }}>
                <input 
                    style={{ ...MASTER.wideRoundInput, maxWidth: 300 }} 
                    value={findCode} 
                    onChange={(e) => setFindCode(e.target.value)} 
                    placeholder={'Type code here'}
                />
                <button 
                    style={{ ...MASTER.wideRoundBtn, width: 100 }} 
                    onClick={() => searchForBoard()}
                >
                    <div style={MASTER.wideRoundBtnText}>SEARCH</div>
                </button>
            </div>
            {boards && generateBoardCards(boards)}
        </div>
    </Layout>
  );
}
  
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
};

export default BoardFind;