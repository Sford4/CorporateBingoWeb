import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'

// reducer imports
import { manageBoardsReducerState, manageBoardsReducer } from  '../../reducers/manageBoardsReducer';

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// component imports
import Link from 'next/link';
import Layout from '../../components/Layout';

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// context imports
import { OrgContext } from '../../contexts/orgContext';
import { ManageBoardsContext } from '../../contexts/manageBoardsContext';
import { UserContext } from '../../contexts/userContext';
import { SUPPORTS_PERFORMANCE_USER_TIMING } from '../../node_modules/next/dist/next-server/lib/utils';

const ManageBoardsHome = (props) => {

    const router = useRouter();

    const { org, getOrg } = useContext(OrgContext);
    const { newBoard } = useContext(ManageBoardsContext);
    const { user, storeUser, logout } = useContext(UserContext);

  const [searchText, setSearchText] = useState('');
  const [boards, setBoards] = useState(org.boards || []);

  const searchForBoard = () => {
    setSearchText('');
    setBoards(dummyBoards)
  }

  useEffect(() => {
    if(!user){
        if(localStorage.getItem('bingo_user')){
            storeUser(JSON.parse(localStorage.getItem('bingo_user')));
        } else {
            logout();
        }
    }
    if(!org._id && user && user.role && !user.role.org){
        router.push('/home');
    }else if(!org._id && user && user.role && user.role.org){
        getOrg(user.role.org);
    }
    if(org && org.boards && org.boards.length !== boards.length){
        setBoards(org.boards);
    }
  }, [org, user])

  const generateBoardRows = () => {
		if(boards.length){
			return boards.map((board, index) => {
				return (
                    <Link key={board._id} href={`manageBoards/[boardID]`} as={`manageBoards/${board._id}`}>
                        <TableRow style={{ cursor: 'pointer' }}>
                            <TableCell>{board.title}</TableCell>
                            <TableCell>{board.numPlayers || 0}</TableCell>
                            <TableCell>{board.numTeams || 0}</TableCell>
                            <TableCell>{board.numSquare}</TableCell>
                        </TableRow>
                    </Link>
				)
			})
		}
		return <TableRow style={{width: '100%'}}><TableCell>No boards yet... click NEW BOARD to make one!</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
  }

  return (
      <Layout>
        <div style={styles.container}>
            <div style={MASTER.pageTitle}>MANAGE BOARDS</div>
            <div style={{ display: 'flex' }}>
                <input 
                    style={{ ...MASTER.wideRoundInput, maxWidth: 300 }} 
                    value={searchText} 
                    onChange={(e) => setSearchText(e.target.value)} 
                    placeholder={'Search by name or access code '}
                />
                <button 
                    style={{ ...MASTER.wideRoundBtn, width: 100 }} 
                    onClick={() => searchForBoard()}
                >
                    <div style={MASTER.wideRoundBtnText}>SEARCH</div>
                </button>
            </div>
            <Table style={{ width:"100%" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>PLAYERS</TableCell>
                        <TableCell>TEAMS</TableCell>
                        <TableCell>TASKS COMPLETED</TableCell>
                        <TableCell>REWARDS EARNED</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {generateBoardRows()}
                </TableBody>
            </Table>
            <button 
                style={{ ...MASTER.wideRoundBtn, width: 150, position: 'absolute', bottom: 30, right: 20, height: 45 }} 
                onClick={() => newBoard(org._id)}
            >
                <div style={MASTER.wideRoundBtnText}>NEW BOARD</div>
            </button>
        </div>
    </Layout>
  );
}
  
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
};

export default ManageBoardsHome;