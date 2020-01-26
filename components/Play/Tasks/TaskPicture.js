import React, { useState, useEffect, useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import FULL_URL from '../../../constants/constants';

// context imports

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

// Component imports
import LoadingSpinner from '../../../components/LoadingSpinner';

const TaskPicture = (props) => {

    const [image, setImage] = useState(props.task.task.answer);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        if(!!image){
            // get the final url from backend
            const imgUrl = 'url'
            setComplete(imgUrl, !!image);
            setLoading(false);
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

    const uploadImgToS3 = async (img) => {
        setLoading(true);
        const request = await fetch(`${FULL_URL}/getSignedUrl`, {
            method: 'POST',
            body: JSON.stringify({
                directory: `games/${props.gameID}/tasks`, 
                id: props.task.id,
            })
          })
          const success = await request.json();
          console.log({success})
          if(success){
            await fetch(success.presigned, {
                headers: {
                        'Content-Type': 'image/*',
                        'x-amz-acl': 'public-read',
                    },
                method: 'PUT',
                body: img,
              }).then((response) => {
                  if(response.status === 200){
                    setImage(success.nonPresigned);
                  } else {
                    alert('There was a problem saving your image... please try again later!')
                  }
                return response;
              });
          } else {
              alert('There was a problem saving your image... please try again later!')
          }
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
            reader.addEventListener('load', () => {
                uploadImgToS3(reader.result)
            });
            reader.readAsArrayBuffer(file)
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
                    {/* <button
                        style={styles.removePhotoBtn}
                        onClick={() => {
                            setImage('');
                            setComplete('', false);
                        }}
                    >
                        <div style={{ ...MASTER.wideRoundBtnText, fontSize: 30, marginTop: -5 }}>x</div>
                    </button> */}
                </div>
            }
            {!image && 
            <div>
                {loading && 
                    <div style={styles.grayTransluscentBackground}>
                        <LoadingSpinner size={50} color={COLORS.primary} thickness={4} />
                    </div>
                }
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                    isDragActive ?
                        <div style={styles.dropzone}>
                            <p>Drop the file here ...</p>
                        </div> :
                        <div style={styles.dropzone}>
                            <p>Drag and drop a picture here, or click to select a file</p>
                        </div>
                    }
                </div>
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
  },
  grayTransluscentBackground: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 210,
      height: 210,
      backgroundColor: 'rgba(230, 230, 230, 0.5)',
      zIndex: 2,
  }
};

export default TaskPicture;