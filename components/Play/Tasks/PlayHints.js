import React, { useState } from 'react';

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

// Component imports

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const PlayHints = (props) => {

  const materialStyles = theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
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

  const [hints] = useState(props.hints);
  const [popupOpen, setPopupOpen] = useState(false);
  const [hintNum, setHintNum] = useState(0);

  const displayHint = () => {
    return <div>{hints[hintNum]}</div>
  }

  return (
    <div style={styles.container}>
      <a onClick={() => setPopupOpen(true)} style={{ cursor: 'pointer' }} title={'Click to view hints about completing this task!'}>
        <img style={{ width: 20, marginLeft: 10 }} src={'../../../static/hints.png'} />
      </a>
      <Dialog open={popupOpen} onBackdropClick={() => setPopupOpen(false)}>
           <DialogTitle onClose={() => setPopupOpen(false)}>
            HINTS
          </DialogTitle>
          <div style={{ width: 200, padding: 30 }}>
            {displayHint()}
          </div>
      </Dialog>
    </div>
  );
}
  
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
};

export default PlayHints;