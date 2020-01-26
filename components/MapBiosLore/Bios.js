import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';

// context imports

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// component imports
import EditBio from './editBio';

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
import { BiosContext } from '../../contexts/biosContext';
  
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

const Bios = (props) => {

    const headCells = [
        { id: 'name', numeric: false, disablePadding: false, label: 'NAME' },
        { id: 'world', numeric: false, disablePadding: false, label: 'WORLD' },
        { id: 'bioType', numeric: false, disablePadding: false, label: 'TYPE' },
        { id: 'race', numeric: false, disablePadding: false, label: 'RACE' },
        { id: 'faction', numeric: false, disablePadding: false, label: 'FACTION' },
        { id: 'display', numeric: false, disablePadding: false, label: 'DISPLAY' },
        { id: 'modified', numeric: false, disablePadding: false, label: 'LAST MODIFIED' },
      ];

    const { getBios, contextBios, contextSetBios, } = useContext(BiosContext);

  const [searchText, setSearchText] = useState('');
  const [bios, setBios] = useState(contextBios || []);
  const [bioToEdit, setBioToEdit] = useState(false);
  const [newBio, setNewBio] = useState(false);

  // table state
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [rows, setRows] = useState(bios);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const searchForBio = (text) => {
    setSearchText(text);
    let conformingRows = bios.filter(bio => bio.name.toLowerCase().includes(text.toLowerCase()));
    setRows(conformingRows);
  }

  const openBioPopup = (bio, isNew) => {
      setNewBio(isNew);
      setBioToEdit(bio)
  }

  const updateBios = (type, bio) => {
    if(type === 'delete'){
        console.log(bio)
        contextSetBios(bios.filter(oldBio => oldBio.id !== bio))
    } else if(type === 'new'){
        const bios = contextBios;
        bios.push(bio);
        contextSetBios(bios);
    } else if(type === 'edit'){
        console.log('updating bio', bio)
        let biosToSave = contextBios.map(oldBio => {
            if(oldBio.id === bio.id){
                return bio;
            } 
            return oldBio;
        })
        contextSetBios(biosToSave);
    }
  }

  useEffect(() => {
    if(!contextBios.length){
        getBios();
    } else {
        console.log('bios after update', contextBios)
        setBios(contextBios);
    }
  }, [contextBios]);

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

  const generateBioRows = () => {
		if(bios.length){
			return stableSort(rows, getSorting(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((bio, index) => {
				return (
                    <TableRow style={{ cursor: 'pointer' }} onClick={() => setBioToEdit(bio, false)} key={index}>
                        <TableCell>{bio.name}</TableCell>
                        <TableCell>{bio.world}</TableCell>
                        <TableCell>{bio.bioType}</TableCell>
                        <TableCell>{bio.race}</TableCell>
                        <TableCell>{bio.faction}</TableCell>
                        <TableCell>{bio.display ? 'Yes' : 'No'}</TableCell>
                        <TableCell>{moment(bio.modified).format("MMM Do, YYYY")}</TableCell>
                    </TableRow>
				)
			})
		}
		return <TableRow style={{width: '100%'}}><TableCell>No bios yet... click NEW BIO to make one!</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
  }

  return (
        <div style={styles.container}>
            <input 
                style={{ ...MASTER.wideRoundInput, maxWidth: 300 }} 
                value={searchText} 
                onChange={(e) => searchForBio(e.target.value)} 
                placeholder={'Search by bio name or email'}
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
                    {generateBioRows()}
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
                onClick={() => openBioPopup(true, true)}
            >
                <div style={MASTER.wideRoundBtnText}>NEW BIO</div>
            </button>
            <Dialog open={!!bioToEdit} onBackdropClick={() => openBioPopup(false, false)}>
                <DialogTitle onClose={() => openBioPopup(false, false)}>
                    {newBio ? 'New Bio' : `Editing Bio: ${bioToEdit && bioToEdit.name}`}
                </DialogTitle>
                <EditBio bio={bioToEdit} openPopup={openBioPopup} newBio={newBio} updateBios={updateBios} />
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

export default Bios;