import { useContext, useState, useEffect } from 'react';


// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// Context imports
import { PlayContext } from '../../contexts/playContext';

// Component imports

const RewardDetail = (props) => {

  const propsReward = props.reward;

  const { contextGame, updateGame, saveGame } = useContext(PlayContext);

  const [reward, setReward] = useState(propsReward);

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
    contextGame.rewards.map(contextReward => {
      if(contextReward.id === reward.id){
        setReward(contextReward);
      }
    })
  }, [contextGame]);

  const redeemReward = () => {
    saveGame({
      ...contextGame,
      rewards: contextGame.rewards.map(contextReward => {
        if(contextReward.id === reward.id){
          return {
            ...reward,
            redeemed: true,
          }
        }
        return contextReward;
      })
    });
  }

  return (
    <div style={styles.container}>
      <div style={{ height: reward.img ? 200 : 0, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        {reward.img && 
          <img 
            style={styles.pic} 
            src={reward.img} 
          />
        }
        {reward.earned && 
          <div style={styles.earnedContainer}>
            <div style={styles.earnedText}>EARNED</div>
          </div>
        }
        { props.mustRedeem && reward.earned && reward.redeemed &&
          <div style={styles.earnedContainer}>
            <div style={styles.redeemText}>CLAIMED</div>
          </div>
        }
      </div>
      <div style={{fontSize: 24, marginVertical: 10}}>{reward.title}</div>
      <div>{reward.description}</div>
      <div style={styles.howTitle}>How to earn:</div> 
      <div style={styles.howText}>{generateHowToEarn(reward.position)}</div>
      { props.mustRedeem && reward.earned && !reward.redeemed &&
        <button 
              style={MASTER.wideRoundBtn} 
              onClick={() => redeemReward()}
          >
              <div style={MASTER.wideRoundBtnText}>REDEEM REWARD</div>
        </button>
      }
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
  },
  pic: {
    width: 200,
    height: 200
  },
  earnedContainer: { 
    position: 'absolute', 
    left: '50%', 
    top: '50%' 
  },
  earnedText: { 
    color: COLORS.green, 
    position: 'relative', 
    left: '-50%', 
    top: '-50%', 
    fontSize: 45, 
    transform: 'rotateZ(345deg)',
  },
  redeemText: { 
    color: 'red', 
    position: 'relative', 
    left: '-50%', 
    top: '-50%', 
    fontSize: 45, 
    transform: 'rotateZ(25deg)',
  },
  howTitle: { 
    fontSize: 20, 
    width: '90%', 
    marginTop: 30, 
    textAlign: 'center' 
  },
  howText: { 
    width: '90%', 
    marginTop: 5, 
    textAlign: 'center' 
  }

};

export default RewardDetail;