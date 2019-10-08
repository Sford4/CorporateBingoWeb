import { useState, useEffect, useReducer, useCallback, useContext } from 'react';
import { useRouter } from 'next/router'

// reducer imports
import { userReducerState, userReducer } from  '../../reducers/userReducer';
import { manageBoardsReducerState, manageBoardsReducer } from  '../../reducers/manageBoardsReducer';
import { ManageBoardsContext } from '../../contexts/manageBoardsContext';

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// Component Imports
import { ChromePicker } from 'react-color';
import {useDropzone} from 'react-dropzone'

// Material UI
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const BoardSettings = (props) => {

    const { contextBoard, updateBoard, setStuffToSave } = useContext(ManageBoardsContext);

    const [board, setBoard] = useState(contextBoard);
    const [hasTimelimit, setHasTimelimit] = useState(!!props.board.timeLimit);

    useEffect(() => {
        if(!contextBoard._id){
            setBoard(props.board);
        } else {
            setBoard(contextBoard);
        }
    }, [contextBoard])

    const changeRegularValues = (name, val) => {
        updateBoard({
            ...board,
            [name]: val
        })
        setStuffToSave(true);
    }

    const changeUseGroups = bool => {
        updateBoard({
            ...board,
            groups: {
                ...board.groups,
                useTeams: bool
            }
        });
        setStuffToSave(true);
    }

    const changeTeams = teams => {
        updateBoard({
            ...board,
            groups: {
                ...board.groups,
                teams: teams
            }
        });
        setStuffToSave(true);
    }


    const deleteTeam = id => {
        changeTeams(board.groups.teams.filter(team => team._id !== id));
    }

    const addTeam = () => {
        changeTeams([...board.groups.teams, {id: Math.random(), name: '', accessCode: ''}]);
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

    const generateTeams = () => {
        return board.groups.teams.map((team, index) => {
            return (
                <div key={`team-id-${team._id}`} style={{ ...styles.labelColumn, flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                    <span style={{ ...styles.inputLabel,  marginLeft: 5, marginRight: 5}}>Team Name: </span>
                    <input 
                        style={{ ...MASTER.wideRoundInput, marginTop: 5, width: 'auto', padding: '0 20px 0 20px', maxWidth: 700 }} 
                        value={team.name} 
                        onChange={e => changeTeams(board.groups.teams.map(group => {
                            if(group._id === team._id) {
                                return {...group, name: e.target.value}
                            }
                            return group;
                        }))} 
                        placeholder={'e.g. Team Alpha'}
                    />
                    <span style={{ ...styles.inputLabel,  marginLeft: 10, marginRight: 5}}>Access Code: </span>
                    <input 
                        style={{ ...MASTER.wideRoundInput, marginTop: 5, width: 'auto', padding: '0 20px 0 20px', maxWidth: 700 }} 
                        value={team.accessCode} 
                        onChange={e => changeTeams(board.groups.teams.map(group => {
                            if(group._id === team._id) {
                                return {...group, accessCode: e.target.value}
                            }
                            return group;
                        }))}
                        placeholder={'e.g. teamAlphaRulez'}
                    />
                    <div onClick={() => deleteTeam(team._id)}>DELETE</div>
                </div>
            )
        })
    }

    if(!board._id){
        return <div>LOADING</div>
    }

    return (
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div style={styles.row}>
                    <div style={styles.labelColumn}>
                        <span style={styles.inputLabel}>Title</span>
                        <input 
                            style={{ ...MASTER.wideRoundInput, marginTop: 5, width: 'auto', padding: '0 20px 0 20px', maxWidth: 700 }} 
                            value={board.title} 
                            onChange={e => changeRegularValues('title', e.target.value)} 
                            placeholder={'e.g. Sales'}
                        />
                    </div>
                </div>
                <div style={styles.row}>
                    <div style={styles.labelColumn}>
                        <span style={styles.inputLabel}>Description/Instructions/Hint</span>
                        <textarea 
                            style={{ ...MASTER.wideRoundTextArea, marginTop: 5, width: 'auto', padding: '5px 20px', maxWidth: 700 }} 
                            value={board.description} 
                            onChange={e => changeRegularValues('description', e.target.value)} 
                            placeholder={'e.g. To be done on the first day in a new office'}
                        />
                    </div>
                </div>
                <div style={styles.row} className='num-squares-randomize'>
                    <div style={{ ...styles.labelColumn, flexDirection: 'row', alignItems: 'center'}}>
                        <span style={{ ...styles.inputLabel, marginRight: 10, marginLeft: 5}}>Number of squares:</span>
                        <Select
                            displayEmpty={false}
                            value={board.numSquares}
                            onChange={(e) => changeRegularValues('numSquares', e.target.value)}
                            inputProps={{
                                name: 'num squares',
                                id: 'num-squares-select',
                            }}
                        >
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="9">9</MenuItem>
                            <MenuItem value="16">16</MenuItem>
                            <MenuItem value="25">25</MenuItem>
                        </Select>
                    </div>
                    <div style={{ ...styles.labelColumn, flexDirection: 'row', alignItems: 'center'}}>
                        <Switch
                            onChange = {() => changeRegularValues('randomize', !board.randomize)}
                            value = {board.randomize}
                            checked={board.randomize}
                        />
                        <span style={{ ...styles.inputLabel,  marginLeft: 5}}>Randomize square placement</span>
                    </div>
                </div>
                <div style={styles.row}>
                    <div style={{ ...styles.labelColumn, flexDirection: 'row', alignItems: 'center'}}>
                        <Switch
                            onChange = {() => changeRegularValues('mustBeDoneInOrder', !board.mustBeDoneInOrder)}
                            value = {board.mustBeDoneInOrder}
                            checked={board.mustBeDoneInOrder}
                        />
                        <span style={{ ...styles.inputLabel,  marginLeft: 5}}>Squares must be done in order</span>
                    </div>
                    <div style={{ ...styles.labelColumn, flexDirection: 'row', alignItems: 'center'}}>
                        <Switch
                            onChange = {() => {
                                if(!!board.timelimit){
                                    setHasTimelimit(false);
                                    changeRegularValues('timelimit', null);
                                } else {
                                    setHasTimelimit(true);
                                    changeRegularValues('timelimit', 'min15');
                                }
                            }}
                            value = {!!board.timelimit}
                            checked={!!board.timelimit}
                        />
                        <span style={{ ...styles.inputLabel, marginRight: 5, marginLeft: 5}}>Time limit:</span>
                        {hasTimelimit ? 
                            <Select
                                displayEmpty={false}
                                value={board.timelimit}
                                onChange={(e) => changeRegularValues('timelimit', e.target.value)}
                                inputProps={{
                                    name: 'age',
                                    id: 'demo-controlled-open-select',
                                }}
                            >
                                <MenuItem value="min15">15 minutes</MenuItem>
                                <MenuItem value="min30">30 minutes</MenuItem>
                                <MenuItem value="hour1">1 hour</MenuItem>
                                <MenuItem value="hour2">2 hours</MenuItem>
                                <MenuItem value="hour4">4 hours</MenuItem>
                                <MenuItem value="hour8">8 hours</MenuItem>
                                <MenuItem value="hour12">12 hours</MenuItem>
                                <MenuItem value="day1">24 hours</MenuItem>
                                <MenuItem value="day7">1 week</MenuItem>
                            </Select>
                            : <span>None</span>
                            }
                    </div>
                </div>
                <div style={styles.row}>
                    <div style={{ ...styles.labelColumn, flexDirection: 'row', alignItems: 'center'}}>
                        <Switch
                            onChange = {() => changeUseGroups(!board.groups.useTeams)}
                            value = {board.groups.useTeams}
                            checked={board.groups.useTeams}
                        />
                        <span style={{ ...styles.inputLabel,  marginLeft: 5}}>Teams</span>
                        {board.groups.useTeams && <div onClick={() => addTeam()}>ADD TEAM</div>}
                    </div>
                </div>
                {board.groups.useTeams &&
                    <div style={styles.row} className="teams-section">
                        <div style={styles.labelColumn}>
                            {generateTeams()}
                        </div>
                    </div>
                }
                {!board.groups.useTeams &&
                    <div style={styles.row}>
                        <div style={styles.labelColumn}>
                            <span style={styles.inputLabel}>Code to Access Board</span>
                            <input 
                                style={{ ...MASTER.wideRoundInput, marginTop: 5, width: 'auto', padding: '0 20px 0 20px', maxWidth: 700 }} 
                                value={board.accessCode} 
                                onChange={e => changeRegularValues('accessCode', e.target.value)} 
                                placeholder={'e.g. Sales'}
                            />
                        </div>
                    </div>
                }
                <div style={{ ...styles.row, justifyContent: 'flex-start' }}>
                    <span style={styles.inputLabel}>Set Square Colors</span>
                </div>
                <div style={styles.row}>
                    <div style={{ ...styles.labelColumn, alignItems: 'center', flexDirection: 'row' }}>
                        <span className='incomplete-color' style={{ ...styles.exampleSquare, backgroundColor: `#${board.incompleteColor}`}}>Incomplete Square Example</span>
                        <ChromePicker color={board.incompleteColor} onChange={(color, e) => changeRegularValues('incompleteColor', color.hex.substring(1, color.hex.length))} />
                    </div>
                    <div style={{ ...styles.labelColumn, alignItems: 'center', flexDirection: 'row' }}>
                        <span className='complete-color' style={{ ...styles.exampleSquare, backgroundColor: `#${board.completeColor}`}}>Complete Square Example</span>
                        <ChromePicker color={board.completeColor} onChange={(color, e) => changeRegularValues('completeColor', color.hex.substring(1, color.hex.length))} />
                    </div>
                </div>
                <div style={{ ...styles.row, justifyContent: 'flex-start' }}>
                    <span style={styles.inputLabel}>Set "Free Square" Image</span>
                </div>
                <div style={{ ...styles.row, justifyContent: 'flex-start' }}>
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
                    <div style={{ ...styles.exampleSquare, backgroundColor: `#${board.completeColor}`}}>
                        <img style={styles.image} src={!board.freeSquareIcon ? '../../static/circle_check.png'  : board.freeSquareIcon}  />
                    </div>
                </div>    
            </div>
            <style jsx>
                {`
                    /* width */
                    ::-webkit-scrollbar {
                      width: 10px;
                    }
                    
                    /* Track */
                    ::-webkit-scrollbar-track {
                      background: #f1f1f1;
                    }
                    
                    /* Handle */
                    ::-webkit-scrollbar-thumb {
                      background: #888;
                    }
                    
                    /* Handle on hover */
                    ::-webkit-scrollbar-thumb:hover {
                      background: #555;
                    }
                `}
            </style>
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
          width: '100%',
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
  
  export default BoardSettings;