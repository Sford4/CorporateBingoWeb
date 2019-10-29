import React, { useState, useEffect, useContext } from 'react';


// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

// Context imports
import { ManageBoardsContext } from '../../../contexts/manageBoardsContext';

// Data imports
import { boardTemplates } from '../../../constants/boardSizes';
import { checkForRewards } from '../../../funcs/boardLogic';

// Component imports
import SquareBuilder from './SquareBuilder';
import RewardBuilder from './RewardBuilder';

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

const BoardBuilderBoard = (props) => {

  const SQUARE_WIDTH = 90 / (Math.sqrt(props.board.numSquares) + 1);

  let taskNum = 1;

  const { contextBoard, updateBoard } = useContext(ManageBoardsContext);

  const [board, setBoard] = useState(props.board);
  const [rewardDialogOpen, setRewardDialogOpen] = useState(false);
  const [reward, setReward] = useState({});
  const [taskDialogOpen, setTaskDialogOpen] = useState(false);
  const [task, setTask] = useState({});
  
  const openRewardBuilderPopup = (reward) => {
    setRewardDialogOpen(true);
    setReward(reward);
  }

  const openSquareBuilderPopup = (task) => {
    setTaskDialogOpen(true);
    setTask(task);
  }

  useEffect(() => {
    setBoard(contextBoard)
  }, [contextBoard])

  const generateRow = row => {
    return row.map((square, index) => {
      switch (square.type) {
        case 'reward':
          const reward = board.rewards.length ?  board.rewards.filter(reward => reward.position === square.id)[0] : null;
          if(!reward){
            return <div key={`empty${index}`} 
                      style={{
                        width: `${SQUARE_WIDTH}%`,
                        paddingTop: `${SQUARE_WIDTH * .72}%`,
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
                  // paddingTop: `${SQUARE_WIDTH * .72}%`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  maxWidth: 120,
                  // maxHeight: 120,
                  position: 'relative',
                }} 
                onClick={() => openRewardBuilderPopup(reward)}
              >
                <img 
                  style={{
                    ...MASTER.smallRewardIcon,
                    width: '70%',
                    height: '70%',
                  }} 
                  src={!reward.title && !reward.description && !reward.img ? '../../static/gift_light_gray.png' : '../../static/gift_gray.png'} 
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
                  paddingTop: `${SQUARE_WIDTH * .72}%`,
                  backgroundColor: `#${board.completeColor}`,
                  borderWidth: 1,
                  borderColor: 'black',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  outline: 'none',
                  cursor: 'pointer',
                  maxWidth: 120,
                  // maxHeight: 120,
                  position: 'relative',
                  
                }}
                onClick={() => openSquareBuilderPopup(task)}
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
                paddingTop: `${SQUARE_WIDTH * .72}%`,
                backgroundColor: task.freeSquare ? `#${board.completeColor}` : `#${board.incompleteColor}`,
                borderWidth: 1,
                borderColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: 'none',
                cursor: 'pointer',
                maxWidth: 120,
                // maxHeight: 120,
                position: 'relative',
              }}
              onClick={() => openSquareBuilderPopup(task)}
            >
              <div style={MASTER.squareText}>{task.squareText}</div>
            </button>
          );
        case 'empty':
          return (
            <div key={`empty${index}`} 
              style={{
                width: `${SQUARE_WIDTH}%`,
                paddingTop: `${SQUARE_WIDTH * .72}%`,
                maxWidth: 120,
                // maxHeight: 120,
                position: 'relative',
              }} 
            />
          );
        default:
          return (
            <div key={`empty${index}`} 
              style={{
                width: `${SQUARE_WIDTH}%`,
                paddingTop: `${SQUARE_WIDTH * .72}%`,
                maxWidth: 120,
                // maxHeight: 120,
                position: 'relative',
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

  if(board){
    return (
      <div style={styles.container}>
        {generateBoard(props.board)}
        <Dialog open={rewardDialogOpen} onBackdropClick={() => setRewardDialogOpen(false)}>
          <DialogTitle onClose={() => setRewardDialogOpen(false)}>
            EDIT REWARD
          </DialogTitle>
          <RewardBuilder reward={reward} openPopup={setRewardDialogOpen} />
        </Dialog>
        <Dialog open={taskDialogOpen} onBackdropClick={() => setTaskDialogOpen(false)}>
           <DialogTitle onClose={() => setTaskDialogOpen(false)}>
            EDIT TASK
          </DialogTitle>
          <SquareBuilder task={task} openPopup={setTaskDialogOpen} />
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

export default BoardBuilderBoard;