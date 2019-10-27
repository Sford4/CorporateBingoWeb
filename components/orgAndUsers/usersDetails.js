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

    const { contextOrg, getOrg, updateOrg } = useContext(OrgContext);
    const { user, } = useContext(UserContext);

  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState(contextOrg.users || []);
  const [userToEdit, setUserToEdit] = useState(false);
  const [newUser, setNewUser] = useState(false);

  const openUserPopup = (user, isNew) => {
      setNewUser(isNew);
      setUserToEdit(user)
  }

  const searchForBoard = () => {
    setSearchText('');
    setUsers(dummyBoards)
  }

  const updateUsers = (type, user) => {
    if(type === 'delete'){
        console.log(user)
        updateOrg({
            ...contextOrg,
            users: contextOrg.users.filter(oldUser => oldUser._id !== user)
        })
    } else if(type === 'new'){
        const users = contextOrg.users;
        users.push(user);
        updateOrg({
            ...contextOrg,
            users: users,
        })
    } else if(type === 'edit'){
        console.log('updating user', user)
        updateOrg({
            ...contextOrg,
            users: contextOrg.users.map(oldUser => {
                if(oldUser._id === user._id){
                    return user;
                } 
                return oldUser;
            }),
        })
    }
  }

  useEffect(() => {
    if(!contextOrg._id && user && user.role && user.role.org){
        getOrg(user.role.org);
    }
    if(contextOrg && contextOrg._id && contextOrg.users){
        console.log('users after update', contextOrg.users)
        setUsers(contextOrg.users);
    }
  }, [contextOrg, user])

  const generateBoardRows = () => {
		if(users.length){
			return users.map((user, index) => {
				return (
                        <TableRow style={{ cursor: 'pointer' }} onClick={() => setUserToEdit(user, false)} key={index}>
                            <TableCell>{user.userName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                        </TableRow>
				)
			})
		}
		return <TableRow style={{width: '100%'}}><TableCell>No users yet... click NEW USER to make one!</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
  }

  return (
        <div style={styles.container}>
            <div style={MASTER.pageTitle}>Admins for {contextOrg.name} (click to edit)</div>
            {/* <input 
                style={{ ...MASTER.wideRoundInput, maxWidth: 300 }} 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)} 
                placeholder={'Search by user name or email'}
            /> */}
            <Table style={{ width:"100%" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>USER NAME</TableCell>
                        <TableCell>EMAIL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {generateBoardRows()}
                </TableBody>
            </Table>
            <button 
                style={{ ...MASTER.wideRoundBtn, width: 150, position: 'absolute', bottom: 30, right: 20, height: 45 }} 
                onClick={() => openUserPopup(true, true)}
            >
                <div style={MASTER.wideRoundBtnText}>NEW USER</div>
            </button>
            <Dialog open={!!userToEdit} onBackdropClick={() => openUserPopup(false, false)}>
                <DialogTitle onClose={() => openUserPopup(false, false)}>
                    {newUser ? 'New User' : `Editing User: ${userToEdit && userToEdit.userName}`}
                </DialogTitle>
                <EditUser user={userToEdit} openPopup={openUserPopup} newUser={newUser} orgID={contextOrg._id} updateUsers={updateUsers} />
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