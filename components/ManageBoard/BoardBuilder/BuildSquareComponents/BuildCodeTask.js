import React, { useState, useEffect, } from 'react';

// Component imports
import { CSVDownload } from "react-csv";

// Material UI
// import Switch from '@material-ui/core/Switch';
// import Chip from '@material-ui/core/Chip';

// Style imports
import { MASTER, COLORS } from '../../../../styles/masterStyles';


const BuildCodeTask = (props) => {

    const [codes, setCodes] = useState(props.task.codes.codeList);
    const [text, setText] = useState('');
    // const [useOnce, setUseOnce] = useState(props.task.codes.useOnce);
    const [downloadCSV, setDownloadCSV] = useState(false);

    useEffect(() => {
        setCodes(codes)
    }, [props.task])

    const massageCSVData = data => {
        return data.map(code => {
            return [code];
        });
    }

    const exportToCSV = () => {
        setDownloadCSV(true)
        // reset component to be called again
        setTimeout(() => {
          setDownloadCSV(false)
        }, 500);
      }

    // const handleUseOnceChange = () => {
    //     setUseOnce(!useOnce)
    //     props.updateTask('codes', {
    //         codeList: codes,
    //         useOnce: !useOnce,
    //     });
    // }

    const handleCodeDelete = deadCode => {
        const codeList = codes.filter(code => code !== deadCode);
        setCodes(codeList);
        props.updateTask('codes', {
            codeList,
            useOnce: props.task.codes.useOnce,
        });
    }

    const addCode = text => {
        if(text){
            const codeList = codes;
            if(!codeList.includes(text)){
                setText('');
                codeList.push(text),
                props.updateTask('codes', {
                    codeList: codeList,
                    useOnce: props.task.codes.useOnce,
                });
            } else {
                alert("Cannot have two identical codes!");
            }
        } else {
            alert('Can\'t add a blank code!');
        }
    }

  const generateCodes = () => {
    return codes.map((code, index) => {
        return (
            // <Chip
            //     key={`code${index}`}
            //     label={code}
            //     onDelete={() => handleCodeDelete(code)}
            // />
            <span key={`code${index}`}>{code}</span>
        )
    })
  }

  return (
    <div style={styles.container}>
        {/* <div style={styles.row}>
            <Switch
                onChange = {() => handleUseOnceChange()}
                value = {useOnce}
                checked={useOnce}
            />
            <span style={{ ...styles.inputLabel,  marginLeft: 5}}>Each code used only once</span>
        </div> */}
        <div style={styles.row}>
            {codes.length ?
                <button 
                    style={{ ...MASTER.wideRoundBtn, width: 50 }} 
                    onClick={() => exportToCSV()}
                >
                    <img src={'../../../../static/download_white.png'} alt='download' style={{ height: 25}}/>
                </button> : null
            }
            <input 
                style={{ ...MASTER.wideRoundInput, width: 200 }} 
                value={text} 
                onChange={e => setText(e.target.value)} 
                placeholder={'e.g. foundIt5'}
            />
            <button 
                style={{ ...MASTER.wideRoundBtn, width: 80 }} 
                onClick={() => addCode(text)}
            >
                <span style={MASTER.wideRoundBtnText}>+ Add</span>
            </button>
        </div>
        {generateCodes()}
        {downloadCSV ? <CSVDownload data={massageCSVData(codes)}  /> : null}
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