import React, { useState, useEffect } from 'react';

// context imports

// Style imports
// import { MASTER } from '../../../styles/masterStyles';

// Component Imports
import Switch from '@material-ui/core/Switch';

const TaskClick = (props) => {

    const [isClicked, setIsClicked] = useState(props.task.complete);

    const handleSwitchChange = val => {
        props.updateTask({
            ...props.task,
            complete: val,
            task: {
                taskType: 'click',
                answer: val ? 'done' : '',
            }
        })
        props.completeSquare(val);
        setIsClicked(val)
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