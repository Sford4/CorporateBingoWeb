import React, { useState, useEffect, useReducer } from 'react';

// reducer imports
import { playReducerState, playReducer } from  '../../../reducers/playReducer';

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

// Component imports
import Layout from '../../../components/Layout';
import PlayBoard from '../../../components/Play/PlayBoard';
import RewardDetail from '../../../components/Play/RewardDetail';

// Material ui
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))(MuiDialogActions);

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


const PlayHome = (props) => { 

  const [playState, dispatch] = useReducer(playReducer, playReducerState);

  const [board, setBoard] = useState(playState.board);
  const [rewardDialogOpen, setRewardDialogOpen] = useState(false);
  const [reward, setReward] = useState({});
  
  const openToRewardDetailPopup = (reward) => {
    setRewardDialogOpen(true);
    setReward(reward);
  }

  const generateWholeBoardRewardIcon = (reward) => {

      return (
          <img 
            alt="Whole board completion reward" 
            onClick={() => openToRewardDetailPopup(reward)} 
            style={{width: '10vw', height: '10vw', maxHeight: 200, maxWidth: 200, cursor: 'pointer', }} 
            src={reward.earned ? '../../../static/gift_green.png' : '../../../static/gift_gray.png'} 
          />
      );
  }

  return (
    <Layout>
      <div style={styles.container}>
        <div style={{width: '100%'}}> 
          <div style={MASTER.pageTitle}>Playing {board.title}</div>
          <div style={{ marginBottom: 20 }}>by {board.org}</div>
        </div>
        {board.rewards.length && board.rewards[0].position === 'wholeBoard' ? generateWholeBoardRewardIcon(board.rewards[0]) : null}
        <PlayBoard 
          board={board}
          navigation={props.navigation}
          size={`size${board.numSquares}`}
          dispatch={dispatch}
        />
      </div>
      <Dialog open={rewardDialogOpen} onBackdropClick={() => setRewardDialogOpen(false)}>
        <DialogTitle onClose={() => setRewardDialogOpen(false)}>
            REWARD
          </DialogTitle>
        <RewardDetail reward={reward} openPopup={setRewardDialogOpen} />
      </Dialog>
    </Layout>
  );
}
  
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default PlayHome;