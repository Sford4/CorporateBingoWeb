import { useState, useEffect, useContext } from 'react';
import moment from 'moment';

// Context imports
import { ManageBoardsContext } from '../../../contexts/manageBoardsContext';

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

// Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const BoardTeamOrPlayers = (props) => {

    const materialStyles = theme => ({
        root: {
          margin: 0,
          padding: 20,
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
    

    const [games, setGames] = useState([]);
    const [gameToView, setGameToView] = useState(null);
    const [slideShow, setSlideShow] = useState(null);
    const [loading, setLoading] = useState(true);

    const { getAllGamesForBoard, gamesForBoard } = useContext(ManageBoardsContext);

    useEffect(() => {
        if(!gamesForBoard.length){
            setLoading(true);
            getAllGamesForBoard(props.boardID);
        } else {
            setLoading(false);
            setGames(gamesForBoard[0] === 'none' ? [] : gamesForBoard);
        }
      }, [gamesForBoard])

      const getNumTasksComplete = tasks => {
        let completedTasks = [];
        tasks.map(task => {
            if(task.complete && !task.freeSquare){
                completedTasks.push(task)
            }
        });
        return completedTasks.length;
    }

      const getNumRewardsEarned = rewards => {
          let earnedRewards = [];
          rewards.map(reward => {
              if(reward.earned){
                  earnedRewards.push(reward)
              }
          });
          return earnedRewards.length;
      }

      const generateGameRows = () => {
        if(games.length){
			return games.map((game, index) => {
				return (
                    <TableRow style={{ cursor: 'pointer' }} onClick={() => setGameToView(game)} key={index}>
                        <TableCell>{game.organizer.team && 'Team '}{game.organizer.name}</TableCell>
                        <TableCell>{getNumTasksComplete(game.squares)}</TableCell>
                        <TableCell>{getNumRewardsEarned(game.rewards)}</TableCell>
                        <TableCell>{moment(game.modified).format("MMM Do, YYYY")}</TableCell>
                    </TableRow>
				)
			})
		}
		return <TableRow style={{width: '100%'}}><TableCell>No games yet... go get people playing!</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
      }

      if(loading){
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div style={MASTER.pageTitle}>LOADING...</div>
            </div>
        </div>
      }

    return (
        <div style={styles.container}>
            {console.log({games})}
            <div style={{ width: '100%', maxWidth: 700 }}>
                <Table style={{ width:"100%" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ORGANIZER</TableCell>
                            <TableCell>TASKS COMPLETE</TableCell>
                            <TableCell>REWARDS EARNED</TableCell>
                            <TableCell>LAST PLAYED</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {generateGameRows()}
                    </TableBody>
                </Table>
            </div>
            <button 
                style={{ ...MASTER.wideRoundBtn, width: 150, position: 'absolute', bottom: 30, right: 20, height: 45 }} 
                onClick={() => setSlideShow(games)}
            >
                <div style={MASTER.wideRoundBtnText}>SLIDESHOW VIEW</div>
            </button>
            <Dialog open={!!gameToView} onBackdropClick={() => setGameToView(null)}>
                <DialogTitle onClose={() => setGameToView(null)}>
                    {gameToView && `Organizer: ${gameToView.organizer.name}`}
                </DialogTitle>
                <div>VIEWING GAME</div>
                {/* <ViewGame user={gameToView} openPopup={openUserPopup} newUser={newUser} orgID={contextOrg._id} updateUsers={updateUsers} /> */}
            </Dialog>
            <Dialog open={!!slideShow} onBackdropClick={() => setSlideShow(null)}>
                <DialogTitle onClose={() => setSlideShow(null)}>
                    {`SLIDESHOW`}
                </DialogTitle>
                <div>VIEWING SLIDESHOW</div>
                {/* <SlideShow games={games} /> */}
            </Dialog>
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
          paddingTop: 40,
      },
  }
  
  export default BoardTeamOrPlayers;