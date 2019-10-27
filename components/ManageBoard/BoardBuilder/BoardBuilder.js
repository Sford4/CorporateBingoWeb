import React, { useState, useEffect, useContext } from 'react';

// context imports
import { ManageBoardsContext } from '../../../contexts/manageBoardsContext';

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

// Component imports
import BoardBuilderBoard from './BoardBuilderBoard';
import RewardBuilder from './RewardBuilder';

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


const BoardBuilder = (props) => { 

  const { contextBoard, updateBoard } = useContext(ManageBoardsContext);

  const [board, setBoard] = useState(contextBoard);
  const [rewardDialogOpen, setRewardDialogOpen] = useState(false);
  const [reward, setReward] = useState({});
  
  const openRewardBuilderPopup = (reward) => {
    setRewardDialogOpen(true);
    setReward(reward);
  }

  const updateBoardBuilder = (board) => {
    updateBoard(board);
  }

  useEffect(() => {
    setBoard(contextBoard)
  }, [contextBoard])

  const generateWholeBoardRewardIcon = (reward) => {

      return (
          <img 
            alt="Whole board completion reward" 
            onClick={() => openRewardBuilderPopup(reward)} 
            style={{width: '10vw', height: '10vw', maxHeight: 200, maxWidth: 200, cursor: 'pointer', }} 
            src={!reward.title && !reward.description && !reward.img ? '../../static/gift_light_gray.png' : '../../static/gift_gray.png'}
          />
      );
  }

  return (
      <div style={styles.container}>
        {board.rewards.length && board.rewards[board.rewards.length - 1].position.includes('wholeBoard') ? generateWholeBoardRewardIcon(board.rewards[board.rewards.length - 1]) : null}
        <BoardBuilderBoard 
          board={board}
          navigation={props.navigation}
          size={`size${board.numSquares}`}
          updateBoard={updateBoardBuilder}
        />
        <Dialog open={rewardDialogOpen} onBackdropClick={() => setRewardDialogOpen(false)}>
          <DialogTitle onClose={() => setRewardDialogOpen(false)}>
              REWARD
            </DialogTitle>
          <RewardBuilder reward={reward} openPopup={setRewardDialogOpen} updateBoard={updateBoardBuilder} />
        </Dialog>
      </div>
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
    width: '100%',
    height: '100%',
    // maxHeight: 650,
    overflowY: 'scroll',
    overflowX: 'overlay',
    width: '60vw',
    maxWidth: 800,
    minWidth: 300,
    paddingHorizontal: 'auto',
    padding: '3% 5%',
  },
};

export default BoardBuilder;