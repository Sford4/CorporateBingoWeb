import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';

// context imports

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// component imports
import EditUser from './editUser';

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// context imports
import { OrgContext } from '../../contexts/orgContext';
import { UserContext } from '../../contexts/userContext';
  
  const materialStyles = theme => ({
    root: {
      margin: 0,
      padding: 20,
      fontSize: 32,
      color: COLORS.primary,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(materialStyles)(props => {
    const { children, classes, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
      </MuiDialogTitle>
    );
  });

const UsersDetails = (props) => {

    const headCells = [
        { id: 'userAlias', numeric: false, disablePadding: false, label: 'USER NAME' },
        { id: 'email', numeric: false, disablePadding: false, label: 'EMAIL' },
        { id: 'modified', numeric: false, disablePadding: false, label: 'LAST MODIFIED' },
      ];

    const { contextOrg, getOrg, contextOrgUsers, contextSetUsers, } = useContext(OrgContext);
    const { user, } = useContext(UserContext);

  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState(contextOrgUsers || []);
  const [userToEdit, setUserToEdit] = useState(false);
  const [newUser, setNewUser] = useState(false);

  // table state
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [rows, setRows] = useState(users);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const searchForUser = (text) => {
    setSearchText(text);
    let conformingRows = users.filter(user => user.userAlias.toLowerCase().includes(text.toLowerCase()) || user.email.toLowerCase().includes(text.toLowerCase()));
    setRows(conformingRows);
  }

  const openUserPopup = (user, isNew) => {
      setNewUser(isNew);
      setUserToEdit(user)
  }

  const updateUsers = (type, user) => {
    if(type === 'delete'){
        console.log(user)
        contextSetUsers(users.filter(oldUser => oldUser.id !== user))
    } else if(type === 'new'){
        const users = contextOrgUsers;
        users.push(user);
        contextSetUsers(users);
    } else if(type === 'edit'){
        console.log('updating user', user)
        let usersToSave = contextOrgUsers.map(oldUser => {
            if(oldUser.id === user.id){
                return user;
            } 
            return oldUser;
        })
        contextSetUsers(usersToSave);
    }
  }

  useEffect(() => {
    if(!contextOrg.id && user && user.org){
        getOrg(user.org);
    }
    if(contextOrg && contextOrg.id && contextOrgUsers){
        console.log('users after update', contextOrgUsers)
        setUsers(contextOrgUsers);
    }
  }, [contextOrg, contextOrgUsers, user]);

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

  const generateUserRows = () => {
		if(users.length){
			return stableSort(rows, getSorting(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((user, index) => {
				return (
                    <TableRow style={{ cursor: 'pointer' }} onClick={() => setUserToEdit(user, false)} key={index}>
                        <TableCell>{user.userAlias}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{moment(user.modified).format("MMM Do, YYYY")}</TableCell>
                    </TableRow>
				)
			})
		}
		return <TableRow style={{width: '100%'}}><TableCell>No users yet... click NEW USER to make one!</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
  }

  return (
        <div style={styles.container}>
            <div style={MASTER.pageTitle}>Admins for {contextOrg.orgName} (click to edit)</div>
            <input 
                style={{ ...MASTER.wideRoundInput, maxWidth: 300 }} 
                value={searchText} 
                onChange={(e) => searchForUser(e.target.value)} 
                placeholder={'Search by user name or email'}
            />
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
                    {generateUserRows()}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <button 
                style={{ ...MASTER.wideRoundBtn, width: 150, position: 'absolute', bottom: 30, right: 20, height: 45 }} 
                onClick={() => openUserPopup(true, true)}
            >
                <div style={MASTER.wideRoundBtnText}>NEW USER</div>
            </button>
            <Dialog open={!!userToEdit} onBackdropClick={() => openUserPopup(false, false)}>
                <DialogTitle onClose={() => openUserPopup(false, false)}>
                    {newUser ? 'New User' : `Editing User: ${userToEdit && userToEdit.userAlias}`}
                </DialogTitle>
                <EditUser user={userToEdit} openPopup={openUserPopup} newUser={newUser} org={contextOrg} updateUsers={updateUsers} />
            </Dialog>
        </div>
  );
}
  
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
  },
};

export default UsersDetails;