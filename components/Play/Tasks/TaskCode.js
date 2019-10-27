import React, { useState, useEffect } from 'react';


// context imports

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

const TaskClick = (props) => {

    const [code, setCode] = useState(props.task.task.answer);

    const submitCode = code => {
        if(props.task.codes.codeList.includes(code)){
            setComplete(code, true);
        } else {
            alert('That wasn\'t what we\'re looking for... check your code and try again!');
        }
        setCode('');
    }

    const setComplete = (code, bool) => {
        props.updateTask({
            ...props.task,
            complete: bool,
            task: {
                taskType: 'code',
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
            onClick={() => submitCode(code)}
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