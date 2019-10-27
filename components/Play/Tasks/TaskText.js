import React, { useState, useEffect, } from 'react';


// context imports

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

const TaskClick = (props) => {

    const [text, setText] = useState(props.task.task.answer);

    const submitText = text => {
        setComplete(text, true);
    }

    const setComplete = (text, bool) => {
        props.updateTask({
            ...props.task,
            complete: bool,
            task: {
                taskType: 'text',
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