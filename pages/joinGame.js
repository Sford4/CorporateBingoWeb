import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

// Style imports
import { MASTER, COLORS } from '../styles/masterStyles';

// component imports
import Link from 'next/link';
import Layout from '../components/Layout';

// material ui
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';

// context imports
import { JoinGameContext } from '../contexts/joinGameContext';
import { UserContext } from '../contexts/userContext';

const materialStyles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    fontSize: 32,
    color: COLORS.primary,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(materialStyles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
    </MuiDialogTitle>
  );
});

const BoardFind = (props) => {

  const router = useRouter()

  const [findCode, setFindCode] = useState('');
  const [accessBoardsFound, setAccessBoardsFound] = useState(false);
  const [foundBoardsPopup, openFoundBoardsPopup] = useState(false);
  const [pastFoundBoards, setPastFoundBoards] = useState([]);

  const { accessBoards, getAccessBoards, foundBoards, findBoards, setFoundBoards } = useContext(JoinGameContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if(!accessBoards || !accessBoards.length && !accessBoardsFound){
        if(user){
          getAccessBoards(user._id);
        }
    } else {
        setAccessBoardsFound(true);
    }
    if(foundBoards.length !== pastFoundBoards.length){
      console.log('setting found boards popup open', foundBoards.length)
      openFoundBoardsPopup(true);
      setPastFoundBoards(foundBoards);
    }
  }, [accessBoards, foundBoards])

  const searchForBoard = () => {
    findBoards(findCode);
    setFindCode('');
  }

  const closeSearchFoundOptionsPopup = () => {
    openFoundBoardsPopup(false)
    setPastFoundBoards([]);
  }

  const generateBoardCards = boards => {
    if(boards[0] === 'none'){
      return <div style={{ marginTop: 15 }}>We couldn't find any games you've already played, try searching for one using it's access code!</div>;
    }
    return boards.map((board, index) => {
      return (
        <Link href={`playGame/[findID]/[userID]`} as={`playGame/game-${board._id}/${user._id}`} key={index}>
            <button key={`board-${board._id}`} style={MASTER.card}>
            <div style={MASTER.cardInteriordiv}>
                <div style={{fontSize: 18, fontWeight: 'bold'}}>{board.title}</div>
                <div>Created by {board.org.name}</div>
                <div>Played by {board.organizer.team ? board.organizer.name : 'you!'}</div>
            </div>
            </button>
        </Link>
      )
    })
  }

  const generateSearchFoundOptions = () => {
    if(!foundBoards.length){
      return <div>No games found, double check your code or make sure you don't already already have a game on that board!</div>
    }
    return foundBoards.map((board, index) => {
      console.log('found board',)
      return (
        <Link 
          href={`playGame/[findID]/[userID]`} 
          as={`playGame/${board.team === 'No teams' ? 'board' : 'game'}-${board._id}/${user._id}`} 
          key={index}
        >
          <div 
            onClick={() => {
              openFoundBoardsPopup(false); 
              setPastFoundBoards([]);
              setFoundBoards([]);
            }} 
            key={`found-board-${index}`} 
            style={ styles.foundOption }
          >
            <div style={{ fontSize: 20, color: COLORS.primary}}>{board.title}</div>
            <div style={{ display: 'flex' }}>
              <div>{board.org} - </div>
              <div>{board.team}</div>
            </div>
          </div>
        </Link>
      )
    })
  }

  if(!accessBoardsFound){
    return (<Layout><div>JOIN BOARD LOADING</div></Layout>);
  }

  return (
      <Layout>
        <div style={styles.container}>
            <div style={MASTER.pageTitle}>FIND GAME</div>
            <Paper>
              <div style={{ padding: '1% 3%', minHeight: 150 }}>
              <div style={{ display: 'flex' }}>
                  <input 
                      style={{ ...MASTER.wideRoundInput, maxWidth: 300 }} 
                      value={findCode} 
                      onChange={(e) => setFindCode(e.target.value)} 
                      placeholder={'Type code here'}
                  />
                  <button 
                      style={{ ...MASTER.wideRoundBtn, width: 100 }} 
                      onClick={() => searchForBoard()}
                  >
                      <div style={MASTER.wideRoundBtnText}>SEARCH</div>
                  </button>
              </div>
              {accessBoards.length && generateBoardCards(accessBoards)}
              </div>
            </Paper>
        </div>
        <Dialog open={foundBoardsPopup} onBackdropClick={() => closeSearchFoundOptionsPopup()}>
          <DialogTitle onClose={() => closeSearchFoundOptionsPopup()}>
              GAMES WE FOUND...
          </DialogTitle>
            <div style={{ padding: 20, minWidth: 300 }}>
              {generateSearchFoundOptions()}    
            </div>
        </Dialog>
    </Layout>
  );
}
  
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  foundOption: {
    borderBottom: `1px solid ${COLORS.primary}`,
    borderTop: `1px solid ${COLORS.primary}`,
    padding: 10,
    cursor: 'pointer',
  }
};

export default BoardFind;