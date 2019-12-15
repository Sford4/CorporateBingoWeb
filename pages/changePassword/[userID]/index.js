import { useState, } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../../../constants/constants';

// Style imports
import { MASTER, COLORS } from '../../../styles/masterStyles';

const ResetPassword = (props) => {

    const router = useRouter()

    const [userID] = useState(props.userID);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const openWarning = (message) => {
        alert(
            `Woah there! ${message}`,
        );
    }

    const updateUser = async () => {
        if(!password){
            openWarning('Password cannot be empty!');
            return;
        }
        if(password && password !== confirmPassword){
            openWarning('Passwords must match!');
            return;
        }
        console.log({userID})
        try {
            const request = await fetch(`${FULL_URL}/users/${userID}/passwordReset`, {
                method: 'PATCH',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password,
                })
              })
              const res = await request.json();
              console.log('from backend', {res})
              if(res && res.success){
                router.push('/login');
              } else {
                  alert('There was a problem saving your password...');
              }
        } catch (err) { alert( err ) }
    }

    const goToLogin = () => {
        router.push('/login');
    }


    return (
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div style={MASTER.pageTitle}>RESET PASSWORD</div>
                <input 
                    style={MASTER.wideRoundInput} 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    type='password'
                    placeholder={'Password'}
                />
                <input 
                    style={MASTER.wideRoundInput} 
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)} 
                    type='password'
                    placeholder={'Confirm Password (passwords must match!)'}
                />
                <button 
                    style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                    onClick={() => updateUser()}
                >
                    <span style={MASTER.wideRoundBtnText}>Save Password</span>
                </button>
                <button 
                    style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                    onClick={() => goToLogin()}
                >
                    <span style={MASTER.wideRoundBtnText}>Remembered your password? Login!</span>
                </button>
            </div>
        </div>
    )
  };

  ResetPassword.getInitialProps = async ({ query }) => {
    return { userID: query.userID }
  }

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
      subcontainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: 400,
    }
  }
  
  export default ResetPassword;