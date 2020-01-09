import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../constants/constants';

// context imports
import { UserContext } from '../contexts/userContext';

// Style imports
import { MASTER } from '../styles/masterStyles';

const ForgotPassword = () => {

    const { user } = useContext(UserContext);

    const router = useRouter()

    const [email, setEmail] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState(false);

    useEffect(() => {
        if(user.id && localStorage.getItem('bingo_token')){
            router.push('/joinGame');
        }
      }, [user])

      const submitEmail = async () => {
        if(!email){
            alert(
              'Must have a valid email!',
            );
            return;
        }
          const request = await fetch(`${FULL_URL}/users/forgotPassword`, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ 
                  email,
              })
            }) 
            const success = await request.json();
            console.log({success})
            if(success.error){
                alert(
                    `Yikes... ${success.error}`
                  );
                return; 
            }
            if(!success){
              alert(
                'Something went wrong... please try again later',
              );
              return;
            }
            setConfirmationMessage(true);
      }

      if(confirmationMessage){
        return (<div style={styles.container}>
          <div style={MASTER.pageTitle}>PASSWORD RESET</div>
          <div style={styles.message}>Your password reset email has been sent, check your inbox!</div>
        </div>);
      }

    return (
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div style={MASTER.pageTitle}>PASSWORD RESET</div>
                <div style={styles.message}>Submit your email address and we'll send you a password reset email.</div>
                <input 
                    style={MASTER.wideRoundInput} 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder={'Email'}
                    type='email'
                />
                
                <button 
                    style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                    onClick={() => submitEmail()}
                >
                    <span style={MASTER.wideRoundBtnText}>Submit</span>
                </button>
                
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
      subcontainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: 400,
    },
    message: {
        textAlign: 'center',
        marginTop: 10,
    }
  }
  
  export default ForgotPassword;