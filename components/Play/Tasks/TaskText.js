import React, { useState, useEffect, useReducer } from 'react';


// reducer imports
import { playReducerState, playReducer } from  '../../../reducers/playReducer';

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

const TaskClick = (props) => {

    const [text, setText] = useState(props.task.task.answer);
    const [playState, dispatch] = useReducer(playReducer, playReducerState);

    const submitText = text => {
        setComplete(text, true);
    }

    const setComplete = (text, bool) => {
        dispatch({type: 'UPDATE_TASK', payload: {
            ...props.task,
            complete: bool,
            task: {
                type: 'text',
                answer: text,
            }
        }});
        props.updateTask({
            ...props.task,
            complete: bool,
            task: {
                type: 'text',
                answer: text,
            }
        })
        props.completeSquare(bool);
    } 

  return (
    <div style={styles.container}>
        <textarea
            autoFocus
            style={MASTER.wideRoundTextArea}
            onChange={(e) => setText(e.target.value)}
            value={text} 
            placeholder={'Enter text here'}
            
        />
        <button 
            style={MASTER.wideRoundBtn} 
            onClick={() => submitText()}
        >
            <div style={MASTER.wideRoundBtnText}>SUBMIT</div>
        </button>
    </div>
  );
}
  
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default TaskClick;