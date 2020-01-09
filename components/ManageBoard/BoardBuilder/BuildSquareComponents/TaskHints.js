import React, { useState, useEffect, } from 'react';

// Component imports
import { CSVDownload } from "react-csv";

// Material UI
// import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';

// Style imports
import { MASTER, COLORS } from '../../../../styles/masterStyles';


const BuildHintTask = (props) => {

    const [hints, setHints] = useState(props.hints);
    const [text, setText] = useState('');

    useEffect(() => {
        setHints(hints)
    }, [props.hints]);

    const handleHintDelete = deadHint => {
        const hintList = hints.filter(hint => hint !== deadHint);
        setHints(hintList);
        props.updateTask('hints', hintList);
    }

    const addHint = text => {
        if(text){
            const hintList = hints;
            if(hintList && !hintList.includes(text)){
                setText('');
                hintList.push(text),
                props.updateTask('hints', hintList);
            } else {
                alert("Cannot have two identical hints!");
            }
        } else {
            alert('Can\'t add a blank hint!');
        }
    }

  const generateHints = () => {
      if(hints && hints.length){
        return hints.map((hint, index) => {
            return (
                <Chip
                    key={`hint${index}`}
                    label={hint}
                    onDelete={() => handleHintDelete(hint)}
                />
            )
        })
      }
  }

  return (
    <div style={styles.container}>
        <div style={styles.row}>
            <input 
                style={{ ...MASTER.wideRoundInput, width: 300, marginTop: 0 }} 
                value={text} 
                onChange={e => setText(e.target.value)} 
                placeholder={'e.g. Behind the mirror'}
            />
            <button 
                style={{ ...MASTER.wideRoundBtn, width: 80, marginTop: 0 }} 
                onClick={() => addHint(text)}
            >
                <span style={MASTER.wideRoundBtnText}>+ Add</span>
            </button>
        </div>
        <div style={{ width: '90%' }}>
            {generateHints()}
        </div>
    </div>
  );
}
  
const styles = {
    container: {
        marginTop: 5,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
  row: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '90%',
      justifyContent: 'center',
  }
};

export default BuildHintTask;