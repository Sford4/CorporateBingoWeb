import { useState, useEffect, } from 'react';
import { useRouter } from 'next/router'

// context imports

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

const BoardRewards = () => {

    const router = useRouter()

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div style={MASTER.pageTitle}>REWARDS</div>
                
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
          paddingTop: 40,
      },
  }
  
  export default BoardRewards;