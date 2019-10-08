import React, { useState, useEffect } from 'react';


// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// Data imports
import { boardTemplates } from '../../constants/boardSizes';
import { checkForRewards } from '../../funcs/boardLogic';

// Component imports
import TaskDetail from './SquareDetail';
import RewardDetail from './RewardDetail';

// Material ui
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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

const PlayBoard = (props) => {

  const SQUARE_WIDTH = 90 / (Math.sqrt(props.board.numSquares) + 1);

  let taskNum = 1;

  const [board, setBoard] = useState(props.board);
  const [rewardDialogOpen, setRewardDialogOpen] = useState(false);
  const [reward, setReward] = useState({});
  const [taskDialogOpen, setTaskDialogOpen] = useState(false);
  const [task, setTask] = useState({});
  
  const openRewardDetailPopup = (reward) => {
    setRewardDialogOpen(true);
    setReward(reward);
  }

  const openTaskDetailPopup = (task) => {
    setTaskDialogOpen(true);
    setTask(task);
  }

  useEffect(() => {
    // run setBoard with the result of checkForRewards
    let rewardsChanged = false;
    const earnedRewards = checkForRewards(board);
    
    const rewards = board.rewards.map(reward => {
      if(earnedRewards.includes(reward.position)){
        if(!reward.earned){
          rewardsChanged = true;
        }
        return {
          ...reward,
          earned: true
        }
      } 
      return {
        ...reward,
        earned: false
      }
    });
    if(rewardsChanged){
      const boardWithRewards = { ...board, rewards };
      setBoard(boardWithRewards);   
    }
  })

  const updateTask = task => {
    setBoard({
        ...board, 
        squares: board.squares.map((square) => {
            if(square._id === task._id){
              return task;
            }
            return square;
          }
        )
      });
  }

  const goToSquareDetail = (task) => {
    props.navigation.navigate('SquareDetail', { task, updateTask });
  }

  const generateRow = row => {
    return row.map((square, index) => {
      switch (square.type) {
        case 'reward':
          const reward = board.rewards.length ?  board.rewards.filter(reward => reward.position === square._id)[0] : null;
          if(!reward){
            return <div key={`empty${index}`} 
                      style={{
                        width: `${SQUARE_WIDTH}%`,
                        aspectRatio: 1,
                        maxWidth: 100,
                        maxHeight: 100,
                      }} 
                    />;
          }
          return(
              <button 
                key={`reward${index}`} 
                style={{
                  width: `${SQUARE_WIDTH}%`,
                  aspectRatio: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  maxWidth: 150,
                  maxHeight: 150,
                }} 
                onClick={() => openRewardDetailPopup(reward)}
              >
                <img 
                  style={{
                    ...MASTER.smallRewardIcon,
                    width: '70%',
                    height: '70%',
                  }} 
                  src={reward.earned ? '../../static/gift_green.png' : '../../static/gift_gray.png'} 
                />
              </button>
          )
        case 'task':
          if(!taskNum){
            return;
          }
          const task = board.squares[taskNum - 1];
          if(taskNum === board.numSquares){
            taskNum = 0;
          }else {
            taskNum++;
          }
          if(task.freeSquare){
            return (
              <button key={`free${index}`} 
                style={{ 
                  width: `${SQUARE_WIDTH}%`,
                  aspectRatio: 1,
                  backgroundColor: `#${board.completeColor}`,
                  borderWidth: 1,
                  borderColor: 'black',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  outline: 'none',
                  maxWidth: 150,
                  maxHeight: 150,
                }}
              >
                <img style={MASTER.freeSquareIcon} src={'../../static/circle_check.png'} />
              </button>
            )
          }
          return (
            <button 
              key={`task${index}`} 
              style={{
                width: `${SQUARE_WIDTH}%`,
                aspectRatio: 1,
                backgroundColor: task.complete ? `#${board.completeColor}` : `#${board.incompleteColor}`,
                borderWidth: 1,
                borderColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: 'none',
                cursor: 'pointer',
                maxWidth: 150,
                maxHeight: 150,
              }}
              onClick={() => openTaskDetailPopup(task)}
            >
              <div>{task.squareText}</div>
            </button>
          );
        case 'empty':
          return (
            <div key={`empty${index}`} 
              style={{
                width: `${SQUARE_WIDTH}%`,
                aspectRatio: 1,
                maxWidth: 150,
                maxHeight: 150,
              }} 
            />
          );
        default:
          return (
            <div key={`empty${index}`} 
              style={{
                width: `${SQUARE_WIDTH}%`,
                aspectRatio: 1,
                maxWidth: 150,
                maxHeight: 150,
              }} 
            />
          );
      }
    })
  }

  const generateBoard = () => {
    const template = boardTemplates[props.size];
    return template.spaces.map((row, index) => {
      return (
        <div 
          key={`row${index + 1}`} 
          style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center'}}
        >
          {generateRow(row)}
        </div>
      ) 
    });
  }

  if(props.board){
    return (
      <div style={styles.container}>
        {generateBoard(props.board)}
        <Dialog open={rewardDialogOpen} onBackdropClick={() => setRewardDialogOpen(false)}>
          <DialogTitle onClose={() => setRewardDialogOpen(false)}>
            REWARD
          </DialogTitle>
          <RewardDetail reward={reward} />
        </Dialog>
        <Dialog open={taskDialogOpen} onBackdropClick={() => setTaskDialogOpen(false)}>
           <DialogTitle onClose={() => setTaskDialogOpen(false)}>
            TASK
          </DialogTitle>
          <TaskDetail task={task} updateTask={updateTask} />
        </Dialog>
      </div>
    );
  } else {
    return null;
  }
}
  
const styles = {
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
};

export default PlayBoard;