

import { useState, useCallback, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../../constants/constants';

// context imports

// Material UI Imports
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';

// Component imports
import {useDropzone} from 'react-dropzone';
import TextContentMaker from '../TextContentMaker';

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectMenu: {
        width: 300,
    },
  }));

const EditBio = (props) => {
    const classes = useStyles();

    const [name, setName] = useState(props.bio.name);
    const [world, setWorld] = useState(props.bio.world || 'Utah');
    const [bioType, setBioType] = useState(props.bio.bioType || 'Character');
    const [race, setRace] = useState(props.bio.race || 'Human');
    const [faction, setFaction] = useState(props.bio.faction || 'None');
    const [img, setImg] = useState(props.bio.img || '');
    const [description, setDescription] = useState(props.bio.description || []);
    const [display, setDisplay] = useState(props.bio.display);

    const openWarning = (message) => {
            alert(
                `Woah there! ${message}`,
            );
    }

    const uploadImgToS3 = async (img) => {
        const request = await fetch(`${FULL_URL}/getSignedUrl`, {
            method: 'POST',
            body: JSON.stringify({
                bucket: 'bioimgs', 
                directory: `bios`, 
                id: board.id,
            })
          })
          const success = await request.json();
          console.log({success})
          if(success){
            const request = await fetch(success, {
                method: 'PUT',
                body: img,
              })
              const res = await request.json();
              console.log({res})
              if(res){
                setImg(success)
              } else {
                  alert('There was a problem saving your image... please try again later!')
              }
          } else {
              alert('There was a problem saving your image... please try again later!')
          }
    }

    const onDrop = useCallback((acceptedFiles) => {
        console.log('in onDrop')
        const reader = new FileReader();
        reader.onabort = () => alert('file reading was aborted')
        reader.onerror = () => alert('file reading has failed')
        const file = acceptedFiles[0];
        // if(!supportedFileTypes.includes(file.type)){
        //     alert('wrongFileType');
        // } else if (file.size > 10000000){
        //     alert('picTooBig');
        // } else {
            console.log({file})
            reader.addEventListener('load', () => {
                console.log('SETTING IMG')
                uploadImgToS3(reader.result);
            }
            );
            reader.readAsDataURL(file);
        // }
    }, []);
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    const newBio = async () => {
        if(!name){
            openWarning('Must have a name!');
            return;
        }
        try {
            const request = await fetch(`${FULL_URL}/bios/new`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json'
                // },
                body: JSON.stringify({
                    name,
                    world,
                    bioType,
                    race,
                    faction,
                    display
                })
              })
              const user = await request.json();
              if(user && bio.id){
                props.openPopup(false, false);
                props.updateBios('new', user);
              } else {
                  alert('There was a problem creating this bio...');
              }
        } catch (err) { alert( err ) }
    }

    const updateBio = async () => {
        if(!name){
            openWarning('Must have a name!');
            return;
        }
        console.log('user updating', props.user)
        try {
            const request = await fetch(`${FULL_URL}/users/update/${props.bio.id}`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
                body: JSON.stringify({
                    id: props.bio.id,
                    name,
                })
              })
              const bio = await request.json();
              console.log('from backend', {bio})
              if(bio && bio.id){
                props.openPopup(false, false);
                props.updateBios('edit', bio);
              } else {
                  alert('There was a problem updating this bio...');
              }
        } catch (err) { alert( err ) }
    }

    const deleteBio = async id => {
        if(confirm(`Are you sure? This will delete ${name} forever!`)){
            try {
                const request = await fetch(`${FULL_URL}/bios/delete${props.bio.id}`, {
                    method: 'POST',
                    // headers: {
                    //   'Accept': 'application/json',
                    //   'Content-Type': 'application/json',
                    //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                    // },
                  })
                  const response = await request.json();
                  if(response && response.id){
                    props.updateBios('delete', id);
                    props.openPopup(false, false);
                  } else {
                      alert('There was a problem deleting this bio...');
                  }
            } catch (err) { alert( err ) }
        }
    }


    return (
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <input 
                    style={MASTER.wideRoundInput} 
                    value={name || ''} 
                    onChange={e => setName(e.target.value)} 
                    placeholder={'Name'}
                />
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {!!img ? 
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img 
                                style={styles.pic} 
                                src={img} 
                            /> 
                            <span>(Click image to change)</span>
                        </div>: 
                        <div style={styles.dropzone}>
                            <p style={{textAlign: 'center'}}>Click or drag here to change image</p>
                            <p style={{textAlign: 'center'}}>Put something that'll get the players excited!</p>
                        </div>
                    }
                </div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="world-select-label">World/Park</InputLabel>
                    <Select
                        labelId="world-select-label"
                        id="world-select"
                        value={world}
                        onChange={e => setWorld(e.target.value)}
                        className={classes.selectMenu}
                    >
                        <MenuItem value={'Utah'}>Utah</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="bioType-select-label">Type</InputLabel>
                    <Select
                        labelId="bioType-select-label"
                        id="bioType-select"
                        value={bioType}
                        className={classes.selectMenu}
                        onChange={e => {
                            setBioType(e.target.value);
                            if(e.target.value === 'Character'){
                                setRace('N/A');
                                setFaction('N/A');
                            }
                        }}
                    >
                        <MenuItem value={'Character'}>Character</MenuItem>
                        <MenuItem value={'Location'}>Location</MenuItem>
                    </Select>
                </FormControl>
                {bioType === 'Character' && 
                    <FormControl className={classes.formControl}>
                        <InputLabel id="race-select-label">Race</InputLabel>
                        <Select
                            labelId="race-select-label"
                            id="race-select"
                            value={race}
                            className={classes.selectMenu}
                            onChange={e => setRace(e.target.value)}
                        >
                            <MenuItem value={'N/A'}>N/A</MenuItem>
                            <MenuItem value={'Human'}>Human</MenuItem>
                            <MenuItem value={'Fairy'}>Fairy</MenuItem>
                            <MenuItem value={'Orc'}>Orc</MenuItem>
                        </Select>
                    </FormControl>
                }
                {bioType === 'Character' && 
                    <FormControl className={classes.formControl}>
                        <InputLabel id="faction-select-label">Faction</InputLabel>
                        <Select
                            labelId="faction-select-label"
                            id="faction-select"
                            value={faction}
                            className={classes.selectMenu}
                            onChange={e => setFaction(e.target.value)}
                        >
                            <MenuItem value={'N/A'}>N/A</MenuItem>
                            <MenuItem value={'Knights'}>Knights</MenuItem>
                            <MenuItem value={'Pirates'}>Pirates</MenuItem>
                            <MenuItem value={'Dragon Tamers'}>Dragon Tamers</MenuItem>
                            <MenuItem value={'Orcs'}>Orcs</MenuItem>
                        </Select>
                    </FormControl>
                }
                <div style={styles.row}>
                    <div>Display this bio on mobile app: </div>
                    <Switch
                        onChange = {() => setDisplay(!display)}
                        value = {display}
                        checked={display}
                    />
                </div>
                <div style={styles.subtitle}>Bio content:</div>
                <TextContentMaker content={description} updateContent={setDescription} />
                {props.newBio ?
                    <button 
                        style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                        onClick={() => newBio()}
                    >
                        <span style={MASTER.wideRoundBtnText}>Save</span>
                    </button> :
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <button 
                            style={{ ...MASTER.wideRoundBtn, backgroundColor: 'red', marginTop: 20 }} 
                            onClick={() => deleteBio(props.bio.id)}
                        >
                            <span style={MASTER.wideRoundBtnText}>Delete Bio</span>
                        </button>
                        <button 
                            style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                            onClick={() => updateBio()}
                        >
                            <span style={MASTER.wideRoundBtnText}>Save</span>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
  };

  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: 10,
        minWidth: 500
    },
    subcontainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: 400,
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
      margin: '5px 0',
  },
  pic: {
    width: 200,
    height: 200,
    cursor: 'pointer',
  },
  row: {
      display: 'flex',
      alignItems: 'center',
  },
  subtitle: {
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: '6%',
  }
}
  
  export default EditBio;