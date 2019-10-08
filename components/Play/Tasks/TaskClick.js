import React, { useState, useEffect, useReducer } from 'react';

// reducer imports
import { playReducerState, playReducer } from  '../../../reducers/playReducer';

// Style imports
// import { MASTER } from '../../../styles/masterStyles';

// Component Imports
import Switch from '@material-ui/core/Switch';

const TaskClick = (props) => {

    const [isClicked, setIsClicked] = useState(props.task.complete);

    const [playState, dispatch] = useReducer(playReducer, playReducerState);

    const handleSwitchChange = val => {
        setIsClicked(val);
        dispatch({type: 'UPDATE_TASK', payload: {
            ...props.task,
            complete: val,
            task: {
                type: 'click',
                answer: val,
            }
        }});
        props.updateTask({
            ...props.task,
            complete: val,
            task: {
                type: 'click',
                answer: val,
            }
        })
        props.completeSquare(val);
    }

  return (
    <div style={styles.container}>
        <div style={{marginRight: 5, fontWeight: 'bold'}}>Just flip this switch:</div>
        <Switch
            onChange = {() => handleSwitchChange(!isClicked)}
            value = {isClicked}
            checked={isClicked}
        />
    </div>
  );
}
  
const styles = {
  container: {
    height: 200,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default TaskClick;