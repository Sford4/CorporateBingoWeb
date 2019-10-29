import { useState, useEffect, useCallback, useContext } from 'react';
import { useRouter } from 'next/router'

// Constants
import { teamCodePrefix } from '../../constants/constants';

// Context imports
import { ManageBoardsContext } from '../../contexts/manageBoardsContext';

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// Component Imports
import { ChromePicker } from 'react-color';
import {useDropzone} from 'react-dropzone';
import QRCode from 'qrcode.react';

// Material UI
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const BoardSettings = (props) => {

    const { contextBoard, updateBoard, setStuffToSave } = useContext(ManageBoardsContext);

    const [board, setBoard] = useState(contextBoard);
    const [hasTimeLimit, setHasTimeLimit] = useState(!!props.board.timeLimit);

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
            accessCode: '',
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
        // show a popup confirming they want to remove a team, let them know it'll delete any games associate with that team
        changeTeams(board.groups.teams.filter(team => team._id !== id));
    }

    const addTeam = () => {
        changeTeams([...board.groups.teams, {_id: `team${Math.random()}`, name: '', accessCode: ''}]);
    }

    const downloadQRCode = (id, type) => {
            const canvas = document.getElementById(id);
            const pngUrl = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
            let downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = `bingo-${type}-code-${id}.png`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
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
                <div key={`team-id-${index}`} style={{ ...styles.labelColumn, flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
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
                    {team.accessCode && team.name ?
                    <button 
                        style={{ ...MASTER.wideRoundBtn, width: 60, marginTop: 4, marginLeft: 10, height: 35 }} 
                        onClick={() => downloadQRCode(team.accessCode, 'team')}
                    >
                        <img style={{ height: 20 }} src={'../../static/qr_code_white.png'} alt='qr code' />
                    </button>
                    : <button 
                            style={{ ...MASTER.wideRoundBtn, width: 60, marginTop: 4, marginLeft: 10, height: 35, backgroundColor: 'gray' }} 
                        >
                            <img style={{ height: 20 }} src={'../../static/qr_code_white.png'} alt='qr code' />
                        </button>
                    }
                    <div style={{ cursor: 'pointer' }} onClick={() => deleteTeam(team._id)}><img src={'../../static/trash.png'} alt='Delete' style={{ height: 30, marginLeft: 10 }} /></div>
                    <div style={{ display: 'none' }}>
                        <QRCode
                            id={team.accessCode}
                            value={team.accessCode}
                            size={200}
                            level={"Q"}
                            includeMargin={false}
                        />
                    </div>
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
                                if(!!board.timeLimit){
                                    setHasTimeLimit(false);
                                    changeRegularValues('timeLimit', null);
                                } else {
                                    setHasTimeLimit(true);
                                    changeRegularValues('timeLimit', 'min15');
                                }
                            }}
                            value = {!!board.timeLimit}
                            checked={!!board.timeLimit}
                        />
                        <span style={{ ...styles.inputLabel, marginRight: 5, marginLeft: 5}}>Time limit:</span>
                        {hasTimeLimit ? 
                            <Select
                                displayEmpty={false}
                                value={board.timeLimit}
                                onChange={(e) => changeRegularValues('timeLimit', e.target.value)}
                                inputProps={{
                                    name: 'age',
                                    id: 'demo-controlled-open-select',
                                }}
                            >
                                <MenuItem value={900000}>15 minutes</MenuItem>
                                <MenuItem value={1800000}>30 minutes</MenuItem>
                                <MenuItem value={3600000}>1 hour</MenuItem>
                                <MenuItem value={7200000}>2 hours</MenuItem>
                                <MenuItem value={14400000}>4 hours</MenuItem>
                                <MenuItem value={28800000}>8 hours</MenuItem>
                                <MenuItem value={43200000}>12 hours</MenuItem>
                                <MenuItem value={86400000}>24 hours</MenuItem>
                                <MenuItem value={604800000}>1 week</MenuItem>
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
                        {board.groups.useTeams &&
                            <button 
                                style={{ ...MASTER.wideRoundBtn, width: 80, marginTop: 0, marginLeft: 10, height: 25 }} 
                                onClick={() => addTeam()}
                            >
                                <div style={MASTER.wideRoundBtnText}>+ NEW</div>
                            </button>
                        }
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
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <input 
                                    style={{ ...MASTER.wideRoundInput, marginTop: 5, width: 300, padding: '0 20px 0 20px', maxWidth: 700 }} 
                                    value={board.accessCode} 
                                    onChange={e => changeRegularValues('accessCode', e.target.value)} 
                                    placeholder={'e.g. Sales'}
                                />
                                {board.accessCode ? 
                                    <button 
                                        style={{ ...MASTER.wideRoundBtn, width: 100, marginTop: 5, marginLeft: 5 }} 
                                        onClick={() => downloadQRCode(board.accessCode, 'board')}
                                    >
                                        <div style={MASTER.wideRoundBtnText}>QR Code</div>
                                    </button>
                                    : 
                                    <button 
                                        style={{ ...MASTER.wideRoundBtn, width: 100, backgroundColor: 'gray', marginTop: 5, marginLeft: 5, cursor: 'auto' }} 
                                    >
                                        <div style={MASTER.wideRoundBtnText}>QR Code</div>
                                    </button>
                                }
                                <div className='QR-maker'>
                                    <QRCode
                                        id={board.accessCode}
                                        value={board.accessCode}
                                        size={200}
                                        level={"Q"}
                                        includeMargin={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div style={{ ...styles.row, justifyContent: 'flex-start' }}>
                    <span style={styles.inputLabel}>Set Square Colors</span>
                </div>
                <div style={styles.row}>
                    <div style={{ ...styles.labelColumn, alignItems: 'center', flexDirection: 'row' }}>
                        <ChromePicker color={board.incompleteColor} onChange={(color, e) => changeRegularValues('incompleteColor', color.hex.substring(1, color.hex.length))} />
                        <span className='incomplete-color' style={{ ...styles.exampleSquare, backgroundColor: `#${board.incompleteColor}`}}>Incomplete Square Example</span>
                    </div>
                    <div style={{ ...styles.labelColumn, alignItems: 'center', flexDirection: 'row' }}>
                        <ChromePicker color={board.completeColor} onChange={(color, e) => changeRegularValues('completeColor', color.hex.substring(1, color.hex.length))} />
                        <span className='complete-color' style={{ ...styles.exampleSquare, backgroundColor: `#${board.completeColor}`}}>Complete Square Example</span>
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
                        <img style={styles.image} src={!board.freeSquareIcon || board.freeSquareIcon === 'default' ? '../../static/circle_check.png'  : board.freeSquareIcon}  />
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
                    .QR-maker {
                        display: none;
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
          marginRight: 10,
          textAlign: 'center',
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