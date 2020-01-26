import React, { useState, useEffect } from 'react';

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// Component imports
import TaskClick from './Tasks/TaskClick';
import TaskCode from './Tasks/TaskCode';
import TaskText from './Tasks/TaskText';
import TaskPicture from './Tasks/TaskPicture';
import TaskQRCode from './Tasks/TaskQRCode';

const SquareDetail = (props) => {

  const task = props.task;
  const updateTask = props.updateTask;

  const [isComplete, setIsComplete] = useState(task.complete);

  const generateTaskMethod = task => {
    if(props.mustBeDoneInOrder && props.previousSquareComplete){
      return <div>Must do previous square first!!!</div>
    }
    switch (task.task.taskType) {
      case 'click':
        return <TaskClick task={task} updateTask={updateTask} completeSquare={setIsComplete} />;
      case 'code':
        return <TaskCode task={task} updateTask={updateTask} completeSquare={setIsComplete} />;
      case 'text':
        return <TaskText task={task} updateTask={updateTask} completeSquare={setIsComplete} />;
      case 'picture':
        return <TaskPicture task={task} updateTask={updateTask} completeSquare={setIsComplete} gameID={props.gameID} />;
      case 'qrCode':
        return <TaskQRCode task={task} updateTask={updateTask} completeSquare={setIsComplete} />;
      // case 'proximity':
      //   return <div>proximity</div>;
      default:
        return <div>No task defined....</div>;
    }
  }

  return (
    <div style={styles.container}>
      <div style={{ fontSize: 24, marginVertical: 5 }}>{task.squareText}</div>
      <div style={{ fontSize: 16, marginBottom: 15 }}>{task.description}</div>
      {isComplete && 
        <div style={styles.completedContainer}>
            <div style={styles.completedText}>COMPLETE</div>
          </div>
      }
      {generateTaskMethod(task)}
    </div>
  );
}
  
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30,
  },
  completedContainer: { 
    position: 'absolute', 
    left: '50%', 
    top: '20%',
    zIndex: 115,
  },
  completedText: { 
    color: COLORS.green, 
    position: 'relative', 
    left: '-50%', 
    top: '-50%', 
    fontSize: 45, 
    transform: 'rotateZ(345deg)',
  },
};

export default SquareDetail;