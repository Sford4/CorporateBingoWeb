import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';

// context imports

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// component imports
import Link from 'next/link';
import Layout from '../../components/Layout';

// Material UI
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';

// context imports
import { OrgContext } from '../../contexts/orgContext';
import { ManageBoardsContext } from '../../contexts/manageBoardsContext';
import { UserContext } from '../../contexts/userContext';

const ManageBoardsHome = (props) => {

    const headCells = [
        { id: 'title', numeric: false, disablePadding: false, label: 'NAME' },
        { id: 'numSquares', numeric: false, disablePadding: false, label: 'TASKS' },
        { id: 'created', numeric: false, disablePadding: false, label: 'CREATED' },
        { id: 'modified', numeric: false, disablePadding: false, label: 'LAST MODIFIED' },
      ];

    const router = useRouter();

    const { contextOrg, getOrg } = useContext(OrgContext);
    const { newBoard } = useContext(ManageBoardsContext);
    const { user, storeUser, logout } = useContext(UserContext);
    const [boards, setBoards] = useState(contextOrg.boards || []);

    // table state
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [rows, setRows] = useState(boards);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [searchText, setSearchText] = useState('');
  

  const searchForBoard = (text) => {
    setSearchText(text);
    let conformingRows = boards.filter(board => board.title.toLowerCase().includes(text.toLowerCase()));
    setRows(conformingRows);
  }

  useEffect(() => {
    if(!user){
        if(localStorage.getItem('bingo_user')){
            storeUser(JSON.parse(localStorage.getItem('bingo_user')));
        } else {
            logout();
        }
    }
    if(!contextOrg.id && user && !user.org){
        router.push('/joinGame');
    }else if(!contextOrg.id && user && user.org){
        getOrg(user.org);
    }
    if(contextOrg && contextOrg.boards && contextOrg.boards.length !== boards.length){
        setBoards(contextOrg.boards);
    }
  }, [contextOrg, user]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }
  
  function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = property => event => {
    handleRequestSort(event, property);
  };

  const generateBoardRows = () => {
      console.log('generating ROWS')
		if(rows.length){
            return stableSort(rows, getSorting(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((board) => {
				return (
                    <Link key={board.id} href={`manageBoards/[boardID]`} as={`manageBoards/${board.id}`}>
                        <TableRow style={{ cursor: 'pointer' }}>
                            <TableCell>{board.title}</TableCell>
                            <TableCell>{board.numSquares}</TableCell>
                            <TableCell>{moment(board.created).format("MMM Do, YYYY")}</TableCell>
                            <TableCell>{moment(board.modified).format("MMM Do, YYYY")}</TableCell>
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
            <Paper>
                <div style={{ padding: '1% 3%' }}>
                    <div style={{ display: 'flex' }}>
                        <input 
                            style={{ ...MASTER.wideRoundInput, maxWidth: 300 }} 
                            value={searchText} 
                            onChange={(e) => searchForBoard(e.target.value)} 
                            placeholder={'Search by name or access code '}
                        />
                    </div>
                    <Table style={{ width:"100%" }}>
                        <TableHead>
                            <TableRow>
                                {headCells.map(headCell => (
                                    <TableCell
                                        key={headCell.id}
                                        align={headCell.numeric ? 'right' : 'left'}
                                        padding={headCell.disablePadding ? 'none' : 'default'}
                                        sortDirection={orderBy === headCell.id ? order : false}
                                    >
                                        <TableSortLabel
                                            active={orderBy === headCell.id}
                                            direction={orderBy === headCell.id ? order : 'asc'}
                                            onClick={createSortHandler(headCell.id)}
                                        >
                                        {headCell.label}
                                        {/* {orderBy === headCell.id ? (
                                            <span>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </span>
                                        ) : null} */}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {generateBoardRows()}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 20, 40, 60]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </div>
            </Paper>
            <button 
                style={{ ...MASTER.wideRoundBtn, width: 150, position: 'absolute', bottom: 30, right: 20, height: 45 }} 
                onClick={() => newBoard(contextOrg.id)}
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