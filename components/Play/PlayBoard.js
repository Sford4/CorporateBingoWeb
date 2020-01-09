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
import PlayHints from './Tasks/PlayHints';

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

  const SQUARE_WIDTH = 60 / (Math.sqrt(props.board.numSquares) + 1);

  let taskNum = 1;
  let taskOrderNum = 0;

  const getNumCompleted = squares => {
    let numCompleted = 0;
    squares.map(square => {
      if(square.complete && !square.freeSquare){
        numCompleted++;
      } else if (!square.completed && !square.freeSquare){
        return
      }
    })
    return numCompleted;
  }

  const [board, setBoard] = useState(props.board);
  const [previousSquareComplete, setPreviousSquareComplete] = useState(true);
  const [numCompleted, setNumCompleted] = useState(getNumCompleted(board.squares))
  const [rewardDialogOpen, setRewardDialogOpen] = useState(false);
  const [reward, setReward] = useState({});
  const [taskDialogOpen, setTaskDialogOpen] = useState(false);
  const [task, setTask] = useState({});
  
  const openRewardDetailPopup = (reward) => {
    setRewardDialogOpen(true);
    setReward(reward);
  }

  const openTaskDetailPopup = (task, previousSquareComplete) => {
    setTaskDialogOpen(true);
    setTask(task);
    setPreviousSquareComplete(previousSquareComplete);
  }

  useEffect(() => {
    setBoard(contextGame);
    setNumCompleted(getNumCompleted(contextGame.squares));
  }, [contextGame])

  const updateTask = task => {
    const gameToSave = {
      ...contextGame, 
      squares: contextGame.squares.map((square) => {
          if(square.id === task.id){
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
                        width: !SOMETHING_RIGHT && (square.id.includes('row') || square.id.includes('diagonalUpRight')) ? 1 : `${SQUARE_WIDTH}vw`,
                        height: !SOMETHING_RIGHT && (square.id.includes('row') || square.id.includes('diagonalUpRight')) ? 1 : `${SQUARE_WIDTH}vw`,
                        // paddingTop: `${SQUARE_WIDTH * .72}%`,
                        // position: 'relative',
                        maxWidth: 110,
                        maxHeight: 110,
                        minWidth: !SOMETHING_RIGHT && (square.id.includes('row') || square.id.includes('diagonalUpRight')) ? 1 : 100,
                        // minHeight: 100,
                      }} 
                    />;
          }
          return(
              <button 
                key={`reward${index}`} 
                style={{
                  width: `${SQUARE_WIDTH}vw`,
                  height: `${SQUARE_WIDTH}vw`,
                  // paddingTop: `${SQUARE_WIDTH * .72}%`,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  maxWidth: 110,
                  maxHeight: 110,
                  // minWidth: 100,
                  // minHeight: 100,
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
                  width: `${SQUARE_WIDTH}vw`,
                  height: `${SQUARE_WIDTH}vw`,
                  // paddingTop: `${SQUARE_WIDTH * .72}%`,
                  position: 'relative',
                  backgroundColor: `#${contextGame.completeColor}`,
                  borderWidth: 1,
                  borderColor: 'black',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  outline: 'none',
                  maxWidth: 110,
                  maxHeight: 110,
                }}
              >
                <img style={MASTER.freeSquareIcon} src={'../../static/circle_check.png'} />
              </button>
            )
          } else {
            taskOrderNum++;
            task.taskOrderNum = taskOrderNum;
            return (
              <button 
                key={`task${index}`} 
                style={{
                  width: `${SQUARE_WIDTH}vw`,
                  height: `${SQUARE_WIDTH}vw`,
                  // paddingTop: `${SQUARE_WIDTH * .72}%`,
                  position: 'relative',
                  backgroundColor: task.complete ? `#${contextGame.completeColor}` : `#${contextGame.incompleteColor}`,
                  borderWidth: 1,
                  borderColor: 'black',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  outline: 'none',
                  cursor: 'pointer',
                  maxWidth: 110,
                  maxHeight: 110,
                }}
                onClick={() => openTaskDetailPopup(
                  task, 
                  ((task.taskOrderNum - 1) !== numCompleted)
                )}
              >
                {contextGame.mustBeDoneInOrder && <div style={{ ...MASTER.squareOrderNum, color: task.complete ? `#${contextGame.completeColor}` : `#${contextGame.incompleteColor}` }}>{taskOrderNum}</div>}
                <div style={{ ...MASTER.squareText, maxHeight: 100 }}>{task.squareText}</div>
              </button>
            );
          }
        case 'empty':
          return (
            <div key={`empty${index}`} 
              style={{
                width: `${SQUARE_WIDTH}vw`,
                height: `${SQUARE_WIDTH}vw`,
                // paddingTop: `${SQUARE_WIDTH * .72}%`,
                position: 'relative',
                maxWidth: 110,
                maxHeight: 110,
              }} 
            />
          );
        default:
          return (
            <div key={`empty${index}`} 
              style={{
                width: `${SQUARE_WIDTH}vw`,
                height: `${SQUARE_WIDTH}vw`,
                // paddingTop: `${SQUARE_WIDTH * .72}%`,
                position: 'relative',
                maxWidth: 110,
                maxHeight: 110,
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
        {generateBoard()}
        <Dialog open={rewardDialogOpen} onBackdropClick={() => setRewardDialogOpen(false)}>
          <DialogTitle onClose={() => setRewardDialogOpen(false)}>
            REWARD
          </DialogTitle>
          <RewardDetail reward={reward} mustRedeem={contextGame.redeemRewards} />
        </Dialog>
        <Dialog open={taskDialogOpen} onBackdropClick={() => setTaskDialogOpen(false)}>
           <DialogTitle onClose={() => setTaskDialogOpen(false)}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              TASK {task.hints && task.hints.length ? <PlayHints hints={task.hints} /> : null}
            </div>
          </DialogTitle>
          <TaskDetail 
            task={task} 
            updateTask={updateTask} 
            previousSquareComplete={previousSquareComplete}
            mustBeDoneInOrder={props.board.mustBeDoneInOrder}  
          />
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