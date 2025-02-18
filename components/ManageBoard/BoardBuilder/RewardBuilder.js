import React, { useState, useEffect, useCallback, useContext } from 'react';
import FULL_URL from '../../../constants/constants';

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

// Context imports
import { ManageBoardsContext } from '../../../contexts/manageBoardsContext';

// Component imports
import {useDropzone} from 'react-dropzone'

const RewardBuilder = (props) => {

  const { contextBoard, updateBoard, setStuffToSave } = useContext(ManageBoardsContext);

  const [reward, setReward] = useState({});
  const [imgChange, setImgChange] = useState(false);
  const [img, setImg] = useState(null);

  const generateHowToEarn = position => {
    if(position === 'wholeBoard'){
      return 'Complete every task on the board!';
    } else if (position.substring(0, 3) === 'row'){
      return `Complete every task in row ${position.slice(-1)}.`; 
    } else if (position.substring(0, 3) === 'col'){
      return `Complete every task in column ${position.slice(-1)}.`;
    } else if (position === 'diagonalUpRight'){
      return 'Complete every task in the diagonal from the bottom left square to the top right.'
    }
    return 'Complete every task in the diagonal from the top left square to the bottom right.'
  }

  useEffect(() => {
    if(!contextBoard.id){
        setReward(props.reward);
    } else {
        setReward(contextBoard.rewards.filter(reward => reward.id === props.reward.id)[0]);
    }
    if(reward.id && !reward.howToEarn){
        updateReward('howToEarn', generateHowToEarn(reward.position));
    }
    if(imgChange){
        updateReward('img', img);
        setReward({...reward, img: img});
        setImgChange(false);
    }
  }, [contextBoard, imgChange])

  const uploadImgToS3 = async (img) => {
    const request = await fetch(`${FULL_URL}/getSignedUrl`, {
        method: 'POST',
        body: JSON.stringify({
            directory: `boards/${contextBoard.id}/rewards`, 
            id: props.reward.id,
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
                setImg(success.nonPresigned);
                setImgChange(true);
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

    const updateReward = (field, val) => {
        const board = contextBoard;
        updateBoard({
            ...board,
            rewards: board.rewards.map(oldReward => {
                if(oldReward.id === reward.id){
                    return {
                        ...oldReward,
                        [field]: val
                    }
                }
                return oldReward;
            })
        });
        setStuffToSave(true);
    }

    const remove = (id) => {
        const board = contextBoard;
        updateBoard({
            ...board,
            rewards: board.rewards.map(oldReward => {
                if(oldReward.id === id){
                    return {
                        ...oldReward,
                        img: '',
                        title: '',
                        howToEarn: '',
                        description: '',
                        item: '',
                        points: 0,
                    }
                }
                return oldReward;
            })
        });
    }

  const done = () => {
    props.openPopup(false);
  }

  if(!reward.id){
    return <div>LOADING</div>
  }

  return (
    <div style={styles.container}>
      <div style={{ height: 200, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!!reward.img ? 
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img 
                    style={styles.pic} 
                    src={reward.img} 
                /> 
                <span>(Click image to change)</span>
            </div>: 
            <div style={styles.dropzone}>
                <p style={{textAlign: 'center'}}>Click or drag here to change image</p>
                <p style={{textAlign: 'center'}}>Put something that'll get the players excited!</p>
            </div>
        }
      </div>
      </div>
      <span style={styles.inputLabel}>Title</span>
      <input 
            style={{ ...MASTER.wideRoundInput, marginTop: 2 }} 
            value={reward.title || ''} 
            onChange={e => {
                updateReward('title', e.target.value);
                setReward({...reward, title: e.target.value});
            }} 
            placeholder={'e.g. $10 gift card!'}
        />
        <span style={styles.inputLabel}>Description</span>
        <textarea
            autoFocus
            style={MASTER.wideRoundTextArea}
            onChange={(e) => {
                updateReward('description', e.target.value);
                setReward({...reward, description: e.target.value});
            }}
            value={reward.description || ''} 
            placeholder={'e.g. A t shirt!'}
        />
         <span style={styles.inputLabel}>Item they'll earn (for their player record)</span>
        <input 
            style={{ ...MASTER.wideRoundInput, marginTop: 2 }} 
            value={reward.item || ''} 
            onChange={e => {
                updateReward('item', e.target.value);
                setReward({...reward, item: e.target.value});
            }} 
            placeholder={'e.g. $10 gift card!'}
        />
         <span style={styles.inputLabel}>Gold they'll earn (for their player record)</span>
        <input 
            style={{ ...MASTER.wideRoundInput, marginTop: 2 }} 
            value={reward.points} 
            onChange={e => {
                updateReward('points', parseInt(e.target.value));
                setReward({...reward, points: parseInt(e.target.value)});
            }} 
            type="number"
        />
        <span style={styles.inputLabel}>How to earn</span>
        <textarea
            autoFocus
            style={MASTER.wideRoundTextArea}
            onChange={(e) => {
                updateReward('howToEarn', e.target.value);
                setReward({...reward, howToEarn: e.target.value});
            }}
            value={reward.howToEarn || ''} 
            placeholder={'e.g. Complete all the speed goals'}
            
        />
        <button 
            style={{ ...MASTER.wideRoundBtn, backgroundColor: 'red', marginTop: 20 }} 
            onClick={() => remove(reward.id)}
        >
            <span style={MASTER.wideRoundBtnText}>Remove Reward</span>
        </button>
        <button 
            style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
            onClick={() => done()}
        >
            <span style={MASTER.wideRoundBtnText}>Done</span>
        </button>
    </div>
  );
}
  
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
    minWidth: 250,
    width: '30vw',
  },
  pic: {
    width: 200,
    height: 200,
    cursor: 'pointer',
  },
  inputLabel: {
    marginTop: 15,
    color: COLORS.primary,
    fontSize: 17,
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

};

export default RewardBuilder;