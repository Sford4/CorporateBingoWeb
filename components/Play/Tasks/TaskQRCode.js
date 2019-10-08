// Must have generated a QR like {"squareID": "8"}
// if the squareID prop in the object in the QR code matches the id of the task, task completed

import React, { useState, useEffect, useReducer } from 'react';

// import QrReader from 'react-qr-reader';

// reducer imports
import { playReducerState, playReducer } from  '../../../reducers/playReducer';

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

const TaskQRCode = (props) => {

    const [playState, dispatch] = useReducer(playReducer, playReducerState);
    const [hasQR, setHasQR] = useState(false);
    const [propComplete, setPropComplete] = useState(props.task.complete);

    const setComplete = (bool) => {
        dispatch({type: 'UPDATE_TASK', payload: {
            ...props.task,
            complete: bool,
            task: {
                type: 'qrCode',
                answer: bool,
            }
        }});
        props.updateTask({
            ...props.task,
            complete: bool,
            task: {
                type: 'qrCode',
                answer: bool,
            }
        })
        props.completeSquare(bool);
    } 

  return (
    <div style={styles.container}> 
        <div style={{ fontWeight: 'bold', color: 'red' }}>Note: This task requires scanning a QR code, which can only be done with our mobile app on a smart phone.</div>
    </div>
  );
}
  
const styles = {
  container: {
    height: 400,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
};

export default TaskQRCode;