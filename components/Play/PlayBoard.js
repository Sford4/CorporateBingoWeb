import React, { useState, useEffect, useContext } from 'react';


// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// Data imports
import { boardTemplates } from '../../constants/boardSizes';
import { checkForRewards } from '../../funcs/boardLogic';

// context imports
import { PlayContext } from '../../contexts/playContext';

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

  const { contextGame, saveGame } = useContext(PlayContext);

  const SQUARE_WIDTH = 90 / (Math.sqrt(contextGame.numSquares) + 1);

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
    setBoard(contextGame);
  }, [contextGame])

  const updateTask = task => {
    const gameToSave = {
      ...contextGame, 
      squares: contextGame.squares.map((square) => {
          if(square._id === task._id){
            return task;
          }
          return square;
        }
      )
    };
    // run saveGame with the result of checkForRewards
    let rewardsChanged = false;
    const earnedRewards = checkForRewards(gameToSave);
    console.log({earnedRewards})
    const rewards = contextGame.rewards.map(reward => {
      if(earnedRewards.includes(reward.position)){
        if(!reward.earned){
          console.log('setting reward earned', reward.position)
          
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
      console.log('saving reward change')
      const gameWithRewards = { ...gameToSave, rewards };
      saveGame(gameWithRewards);   
    } else {
      saveGame(gameToSave);
    }
  }

  const generateRow = row => {
    const SOMETHING_RIGHT = contextGame.rewards.filter(reward => (reward.position.includes('row') || reward.position.includes('diagonalUpRight')) && reward.title)[0];
    return row.map((square, index) => {
      switch (square.type) {
        case 'reward':
          const reward = contextGame.rewards.length ?  contextGame.rewards.filter(reward => reward.position === square.id && reward.title)[0] : null;
          if(!reward){
            return <div key={`empty${index}`} 
                      style={{
                        width: !SOMETHING_RIGHT && (square.id.includes('row') || square.id.includes('diagonalUpRight')) ? 1 : `${SQUARE_WIDTH}%`,
                        aspectRatio: 1,
                        maxWidth: 150,
                        maxHeight: 150,
                        minWidth: !SOMETHING_RIGHT && (square.id.includes('row') || square.id.includes('diagonalUpRight')) ? 1 : 100,
                        minHeight: 100,
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
                  minWidth: 100,
                  minHeight: 100,
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
          const task = contextGame.squares[taskNum - 1];
          if(taskNum === contextGame.numSquares){
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
                  backgroundColor: `#${contextGame.completeColor}`,
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
                backgroundColor: task.complete ? `#${contextGame.completeColor}` : `#${contextGame.incompleteColor}`,
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
    console.log('generating rows', contextGame)
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
        {generateBoard()}
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