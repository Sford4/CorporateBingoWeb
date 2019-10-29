import { useState, useEffect, useCallback, useContext } from 'react';

// Context imports
import { OrgContext } from '../../contexts/orgContext';

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// Component Imports
import { ChromePicker } from 'react-color';
import {useDropzone} from 'react-dropzone';

// Material UI

const OrgDetails = (props) => {

    const { contextOrg, updateOrg, setStuffToSave } = useContext(OrgContext);

    const [org, setOrg] = useState(contextOrg);

    useEffect(() => {
        if(!contextOrg._id){
            setOrg(props.org);
        } else {
            setOrg(contextOrg);
        }
    }, [contextOrg])

    const changeRegularValues = (name, val) => {
        updateOrg({
            ...org,
            [name]: val
        })
        setStuffToSave(true);
    }

    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader();
        reader.onabort = () => alert('file reading was aborted')
        reader.onerror = () => alert('file reading has failed')
        const file = acceptedFiles[0];
        // if(!supportedFileTypes.includes(file.type)){
        //     this.openSnackBar(<FormattedMessage {...UserMessages.wrongFileType} />);
        // } else if (file.size > 10000000){
        //     this.openSnackBar(<FormattedMessage {...UserMessages.picTooBig} />);
        // } else {
            reader.addEventListener('load', () =>
                changeRegularValues('freeSquareIcon', reader.result)
            );
            reader.readAsDataURL(file);
        // }
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    if(!org._id){
        return <div>LOADING</div>
    }

    return (
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div style={styles.row}>
                    <div style={{ ...styles.labelColumn, width: '100%',}}>
                        <span style={styles.inputLabel}>Org Name</span>
                        <input 
                            style={{ ...MASTER.wideRoundInput, marginTop: 5, width: 'auto', padding: '0 20px 0 20px', maxWidth: 700 }} 
                            value={org.name} 
                            onChange={e => changeRegularValues('name', e.target.value)} 
                            placeholder={'e.g. Example Co'}
                        />
                    </div>
                </div>
                <div style={{ ...styles.row, justifyContent: 'flex-start' }}>
                    <span style={styles.inputLabel}>Default Square Colors</span>
                </div>
                <div style={styles.row}>
                    <div style={{ ...styles.labelColumn, alignItems: 'center', flexDirection: 'row' }}>
                        <ChromePicker color={org.incompleteColor} onChange={(color, e) => changeRegularValues('incompleteColor', color.hex.substring(1, color.hex.length))} />
                        <span className='incomplete-color' style={{ ...styles.exampleSquare, backgroundColor: `#${org.incompleteColor}`}}>Incomplete Square Example</span>
                    </div>
                    <div style={{ ...styles.labelColumn, alignItems: 'center', flexDirection: 'row' }}>
                        <ChromePicker color={org.completeColor} onChange={(color, e) => changeRegularValues('completeColor', color.hex.substring(1, color.hex.length))} />
                        <span className='complete-color' style={{ ...styles.exampleSquare, backgroundColor: `#${org.completeColor}`}}>Complete Square Example</span>
                    </div>
                </div>
                <div style={{ ...styles.row, justifyContent: 'flex-start' }}>
                    <span style={{ ...styles.inputLabel, marginTop: 20 }}>Default "Free Square" Image</span>
                </div>
                <div style={{ ...styles.row, alignItems: 'center', marginTop: 0 }}>
                    <div style={{ display: 'flex', width: '50%' }}>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                            isDragActive ?
                                <div style={styles.dropzone}>
                                    <p style={{textAlign: 'center'}}>Click or drag to upload an image</p>
                                    <p style={{textAlign: 'center'}}>Images must be square, and images with a transparent background work best.</p>
                                </div> : 
                                <div style={styles.dropzone}>
                                    <p style={{textAlign: 'center'}}>Click or drag here to change image</p>
                                    <p style={{textAlign: 'center'}}>Images must be square, and images with a transparent background work best.</p>
                                </div>
                            }
                        </div>
                        <div style={{ ...styles.exampleSquare, backgroundColor: `#${org.completeColor}`}}>
                            <img style={styles.image} src={!org.freeSquareIcon ? '../../static/circle_check.png'  : org.freeSquareIcon}  />
                        </div>
                    </div>
                    <div style={{ ...styles.labelColumn, alignItems: 'center', flexDirection: 'row' }}>
                        <ChromePicker color={org.primaryColor} onChange={(color, e) => changeRegularValues('primaryColor', color.hex.substring(1, color.hex.length))} />
                        <span className='complete-color' style={{ ...styles.exampleSquare, color: 'white', backgroundColor: `#${org.primaryColor}`}}>Branding Primary Color</span>
                    </div>
                </div>    
            </div>
        </div>
    )
  };

  const styles = {
      container: {
          width: '100%',
          height: '100%',
          maxHeight: 700,
          overflowY: 'scroll',
          overflowX: 'overlay',
          paddingBottom: 10,
          padding: '3% 5%',
      },
      subcontainer: {
      },
      row: {
          display: 'flex',
        //   flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '100%',
          marginTop: 15
      },
      labelColumn: {
          width: '50%',
          minWidth: 300,
          display: 'flex',
          flexDirection: 'column',
      },
      inputLabel: {
          marginLeft: 15,
          color: COLORS.primary,
          fontSize: 17,
      },
      exampleSquare: {
          width: 200,
          height: 200,
          minWidth: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
          marginRight: 10
      },
      image: {
          width: '80%',
          height: '80%',
      },
      dropzone: {
          display: 'flex', 
          flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        border: '2px dotted black',
        marginRight: 10,
        cursor: 'pointer',
        outline: 'none',
    }
  }
  
  export default OrgDetails;