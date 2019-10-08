import React, { useState, useEffect, useReducer } from 'react';


// reducer imports
import { playReducerState, playReducer } from  '../../../reducers/playReducer';

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

const TaskClick = (props) => {

    const [code, setCode] = useState(props.task.task.answer);
    const [playState, dispatch] = useReducer(playReducer, playReducerState);

    const submitCode = code => {
        setComplete(code, true);
    }

    const setComplete = (code, bool) => {
        dispatch({type: 'UPDATE_TASK', payload: {
            ...props.task,
            complete: bool,
            task: {
                type: 'code',
                answer: code,
            }
        }});
        props.updateTask({
            ...props.task,
            complete: bool,
            task: {
                type: 'code',
                answer: code,
            }
        })
        props.completeSquare(bool);
    } 

  return (
    <div style={styles.container}>
        <input 
            style={MASTER.wideRoundInput}
            placeholder={'Enter code here'} 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
        />
        <button 
            style={MASTER.wideRoundBtn} 
            onClick={() => submitCode()}
        >
            <div style={MASTER.wideRoundBtnText}>SUBMIT CODE</div>
        </button>
    </div>
  );
}
  
const styles = {
  container: {
    height: 400,
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
  },
};

export default TaskClick;