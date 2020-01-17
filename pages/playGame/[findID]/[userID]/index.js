import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

// context imports
import { PlayContext } from '../../../../contexts/playContext';

// Style imports
import { MASTER, COLORS } from '../../../../styles/masterStyles';

// Component imports
import Layout from '../../../../components/Layout';
import PlayBoard from '../../../../components/Play/PlayBoard';
import RewardDetail from '../../../../components/Play/RewardDetail';

// Material ui
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import LoadingSpinner from '../../../../components/LoadingSpinner';


const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))(MuiDialogActions);

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




const PlayHome = (props) => { 
  // const router = useRouter();
  // const findID = router.query;

  const { getGame, contextGame } = useContext(PlayContext);

  const [game, setGame] = useState(contextGame);
  const [rewardDialogOpen, setRewardDialogOpen] = useState(false);
  const [reward, setReward] = useState({});

  useEffect(() => {
    if(!contextGame.id){
      console.log(props.findID)
        getGame(props.findID, props.userID);
    } else {
        setGame(contextGame);
    }
}, [contextGame]);

const updateGame = game => {

}
  
  const openToRewardDetailPopup = (reward) => {
    setRewardDialogOpen(true);
    setReward(reward);
  }

  const generateWholeBoardRewardIcon = (reward) => {
      return (
          <img 
            alt="Whole board completion reward" 
            onClick={() => openToRewardDetailPopup(reward)} 
            style={{width: '10vw', height: '10vw', maxHeight: 200, maxWidth: 200, cursor: 'pointer', }} 
            src={reward.earned ? '../../../static/gift_green.png' : '../../../static/gift_gray.png'} 
          />
      );
  }

  if(game && game.id){
    return (
      <Layout>
        <div style={styles.container}>
          <div style={{width: '100%'}}> 
            <div style={MASTER.pageTitle}>Playing {game.title}</div>
            <div style={{  }}>Created by {game.orgName}</div>
            <div style={{ marginBottom: 20 }}>Organized by {game.organizerName}</div>
          </div>
          {game.rewards.length && game.rewards[game.rewards.length - 1].position.includes('wholeBoard') && game.rewards[game.rewards.length - 1].title ? generateWholeBoardRewardIcon(game.rewards[game.rewards.length - 1]) : null}
          <PlayBoard 
            board={game}
            navigation={props.navigation}
            size={`size${game.numSquares}`}
          />
        </div>
        <Dialog open={rewardDialogOpen} onBackdropClick={() => setRewardDialogOpen(false)}>
          <DialogTitle onClose={() => setRewardDialogOpen(false)}>
              REWARD
            </DialogTitle>
          <RewardDetail reward={reward} mustRedeem={game.redeemRewards} openPopup={setRewardDialogOpen} />
        </Dialog>
      </Layout>
    );

  }
  return (
    <Layout>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LoadingSpinner size={100} color={COLORS.primary} thickness={5} />
        </div>
    </Layout>
  )
}

PlayHome.getInitialProps = async ({ query }) => {
  return { findID: query.findID, userID: query.userID }
}
  
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default PlayHome;