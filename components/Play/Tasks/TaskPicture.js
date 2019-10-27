import React, { useState, useEffect, useCallback } from 'react';
import {useDropzone} from 'react-dropzone'

// context imports

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

// Component imports

const TaskPicture = (props) => {

    const [image, setImage] = useState(props.task.task.answer);
    const [cameraOpen, setCameraOpen] = useState(false);
    const [cameraPermission, setCameraPermission] = useState('');

    useEffect(() => {
        if(!!image){
            setComplete(image, !!image);
        }
    }, [image])

    const setComplete = (picture, bool) => {
        props.updateTask({
            ...props.task,
            complete: bool,
            task: {
                taskType: 'picture',
                answer: picture,
            }
        })
        props.completeSquare(bool);
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
                setImage(reader.result)
            );
            reader.readAsDataURL(file);
        // }
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div style={styles.container}>
        <div style={{width: '100%', display: 'flex', alignItems: 'center'}}>
            {
                !!image && 
                <div>
                    <img style={styles.image} src={image}  />
                    <button
                        style={styles.removePhotoBtn}
                        onClick={() => {
                            setImage('');
                            setComplete('', false);
                        }}
                    >
                        <div style={{ ...MASTER.wideRoundBtnText, fontSize: 30, marginTop: -5 }}>x</div>
                    </button>
                </div>
            }
            {!image && 
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            }
          </div>
    </div>
  );
}
  
const styles = {
  container: {
    // height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 300,
    width: 300,
  },
  cheeseBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: 100,
    borderRadius: 50,
    height: 50,
    marginBottom: 20,
  },
  removePhotoBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: 30,
    borderRadius: 50,
    height: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
  }
};

export default TaskPicture;