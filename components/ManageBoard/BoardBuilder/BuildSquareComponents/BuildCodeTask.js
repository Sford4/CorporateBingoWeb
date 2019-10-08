import React, { useState, } from 'react';

// Material UI
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';

// Style imports
import { MASTER, COLORS } from '../../../../styles/masterStyles';


const BuildCodeTask = (props) => {

    const [codes, setCodes] = useState(props.task.codes.codeList);
    const [text, setText] = useState('');
    const [useOnce, setUseOnce] = useState(props.task.codes.useOnce)


    const handleCodeDelete = deadCode => {
        setCodes(codes.filter(code => code !== deadCode));
    }

    const addCode = text => {
        const codeList = codes;
        if(!codeList.includes(text)){
            codeList.push(text);
            console.log({codeList})
            setCodes(codeList);
            setText('');
        } else {
            alert("Cannot have two identical codes!");
        }
    }

  const generateCodes = () => {
      console.log('generating codes', codes)
    return codes.map((code, index) => {
        return (
            <Chip
                key={`code${index}`}
                label={code}
                onDelete={() => handleCodeDelete(code)}
            />
        )
    })
  }

  return (
    <div style={styles.container}>
        <div style={styles.row}>
            <Switch
                onChange = {() => setUseOnce(!useOnce)}
                value = {useOnce}
                checked={useOnce}
            />
            <span style={{ ...styles.inputLabel,  marginLeft: 5}}>Each code used only once</span>
        </div>
        <div style={styles.row}>
            <input 
                style={{ ...MASTER.wideRoundInput, width: 200 }} 
                value={text} 
                onChange={e => setText(e.target.value)} 
                placeholder={'e.g. foundIt5'}
            />
            <button 
                style={{ ...MASTER.wideRoundBtn }} 
                onClick={() => addCode(text)}
            >
                <span style={MASTER.wideRoundBtnText}>+ Add</span>
            </button>
        </div>
        {generateCodes()}
    </div>
  );
}
  
const styles = {
  row: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '90%',
      justifyContent: 'center',
  }
};

export default BuildCodeTask;