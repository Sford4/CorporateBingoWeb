import React, { useState, useEffect, useContext } from 'react';

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

// Context imports
import { ManageBoardsContext } from '../../../contexts/manageBoardsContext';

// Component Imports
import BuildQRCodeTask from './BuildSquareComponents/BuildQRCodeTask';
import BuildCodeTask from './BuildSquareComponents/BuildCodeTask';
import TaskHints from './BuildSquareComponents/TaskHints';

// Material UI
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const SquareBuilder = (props) => {

    const generateTaskMethod = taskType => {
        switch (taskType) {
            case 'click':
                return null;
            case 'code':
                return (
                    <BuildCodeTask task={props.task} updateTask={updateTask} />
                );
            case 'text':
                return (
                    <div className='text-builder'>
                        
                    </div>
                );
            case 'picture':
                return (
                    <div className='picture-builder'>
                        <span></span>
                    </div>
                );
            case 'qrCode':
                return (
                    <BuildQRCodeTask task={task} />
                );
            // case 'proximity':
            //   return <div>proximity</div>;
            default:
                return null;
        }
    }

  const { contextBoard, updateBoard, setStuffToSave } = useContext(ManageBoardsContext);

  const [task, setTask] = useState(props.task);

  useEffect(() => {
    if(!contextBoard._id){
        setTask(props.task);
    } else {
        setTask(contextBoard.squares.filter(task => task._id === props.task._id)[0]);
    }
  }, [contextBoard])

  const updateTask = (field, val) => {
    const board = contextBoard;
    updateBoard({
        ...board,
        squares: board.squares.map(oldTask => {
            if(oldTask._id === props.task._id){
                if(field === 'task'){
                    return {
                        ...oldTask,
                        task: {
                            taskType: val,
                            answer: '',
                        }
                    }
                }
                if(field === 'codes'){
                    return {
                        ...oldTask,
                        codes: { 
                            codeList: val.codeList,
                            useOnce: val.useOnce,
                         }
                    }
                }
                if(field === 'freeSquare'){
                    // if a square is a free square, we set it to complete: true, if not, complete false
                        return {
                            ...oldTask,
                            freeSquare: val,
                            complete: val,
                        }
                }
                return {
                    ...oldTask,
                    [field]: val
                }
            }
            return oldTask;
        })
    });
    setStuffToSave(true);
}

  const done = () => {
    props.openPopup(false);
  }

  return (
    <div style={styles.container}>
        <div>
            <Switch
                onChange = {() => updateTask('freeSquare', !task.freeSquare)}
                value = {task.freeSquare}
                checked={task.freeSquare}
            />
            <span style={{ ...styles.inputLabel,  marginLeft: 5}}>This is a free square</span>
        </div>
        {!task.freeSquare && 
        (
            <div style={styles.taskSettingsContainer}>
                <span style={styles.inputLabel}>Title (will also appear on the square)</span>
                <input 
                    style={{ ...MASTER.wideRoundInput, marginTop: 2 }} 
                    value={task.squareText} 
                    onChange={e => updateTask('squareText', e.target.value)} 
                    placeholder={'e.g. Two sales in one hour'}
                    maxlength="90"
                />
                <span style={styles.inputLabel}>Description</span>
                <textarea
                    autoFocus
                    style={MASTER.wideRoundTextArea}
                    onChange={(e) => updateTask('description', e.target.value)}
                    value={task.description} 
                    placeholder={'e.g. Make two sales in one hour and enter their ids below!'}
                />
                <span style={{ ...styles.inputLabel, marginRight: 10, marginLeft: 5}}>Hints:</span>
                <TaskHints updateTask={updateTask} hints={task.hints} />
                <span style={{ ...styles.inputLabel, marginRight: 10, marginLeft: 5}}>Task to complete:</span>
                <Select
                    displayEmpty={false}
                    value={task.task.taskType}
                    onChange={(e) => updateTask('task', e.target.value)}
                    inputProps={{
                        name: 'num squares',
                        id: 'num-squares-select',
                    }}
                >
                    <MenuItem value="click">Flip a switch</MenuItem>
                    <MenuItem value="code">Enter a code</MenuItem>
                    <MenuItem value="text">Enter some text</MenuItem>
                    <MenuItem value="picture">Upload a picture</MenuItem>
                    <MenuItem value="qrCode">Scan a QR Code</MenuItem>
                </Select>
                <div style={{ marginTop: 20 }}>
                    {generateTaskMethod(task.task.taskType)}
                </div>
                <button 
                    style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                    onClick={() => done()}
                >
                    <span style={MASTER.wideRoundBtnText}>Done</span>
                </button>
            </div>
        )}
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
    paddingTop: 0,
    width: '30vw',
    minWidth: 300,
  },
  taskSettingsContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
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
  inputLabel: {
    marginTop: 15,
    color: COLORS.primary,
    fontSize: 17,
  },
};

export default SquareBuilder;