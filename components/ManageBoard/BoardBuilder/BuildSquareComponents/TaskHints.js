import React, { useState, useEffect, } from 'react';

// Component imports
import { CSVDownload } from "react-csv";

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
            let multilineHint = hint.replace('\\n', '\n');
            return (
                <div style={{ display: 'flex', maxWidth: '100%' }} key={`hint${index}`}>
                    <span style={ styles.deleteHintX } onClick={() => handleHintDelete(hint)}>x</span>
                    <div style={{ marginLeft: 5 }}>{multilineHint}</div>
                </div>
            )
        })
      }
  }

  return (
    <div style={styles.container}>
        <div style={styles.col}>
            <textarea 
                style={{ ...MASTER.wideRoundTextArea, width: '100%' }} 
                value={text} 
                onChange={e => setText(e.target.value)} 
                placeholder={'e.g. Behind the mirror'}
            />
            <button 
                style={{ ...MASTER.wideRoundBtn, marginTop: 2 }} 
                onClick={() => addHint(text)}
            >
                <span style={MASTER.wideRoundBtnText}>+ Add Hint</span>
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
        width: '100%',
    },
  col: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '90%',
      justifyContent: 'center',
  },
  deleteHintX: {
    backgroundColor: 'gray',
    width: 15,
    height: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingBottom: 2,
    color: 'white',
    cursor: 'pointer',
    minWidth: 15,
    minHeight: 15,
  }
};

export default BuildHintTask;