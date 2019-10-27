

import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'

// context imports
import { UserContext } from '../contexts/userContext';

// Style imports
import { MASTER, COLORS } from '../styles/masterStyles';

const Signup = () => {

    const { user, storeUser } = useContext(UserContext);

    const router = useRouter()

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if(user._id && localStorage.getItem('bingo_token')){
            router.push('/joinGame');
        }
      }, [user])

    const openWarning = (message) => {
            alert(
                `Woah there! ${message}`,
            );
    }

    const validEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    const signup = async () => {
        if(!userName){
            openWarning('Must have a username!');
            return;
        }
        if(!email || !validEmail(email)){
            openWarning('Must have a valid email!');
            return;
        }
        if(!password || password !== confirmPassword){
            openWarning('Passwords must match!');
            return;
        }
        try {
            const request = await fetch('http://localhost:8000/users/signup', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userName,
                    email,
                    password,
                    role: {
                        org: null,
                        level: 3
                    },
                })
              })
              const user = await request.json();
              storeUser(user);
        } catch (err) { alert( err ) }
        
        
    }

    const goToLogin = () => {
        router.push('/login');
    }

    return (
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div style={MASTER.pageTitle}>SIGNUP</div>
                <input 
                    style={MASTER.wideRoundInput} 
                    value={userName} 
                    onChange={e => setUserName(e.target.value)} 
                    placeholder={'User Name'}
                />
                <input 
                    style={MASTER.wideRoundInput} 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder={'Email'}
                />
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
                    onClick={() => signup()}
                >
                    <span style={MASTER.wideRoundBtnText}>Sign up</span>
                </button>
                <button 
                    style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                    onClick={() => goToLogin()}
                >
                    <span style={MASTER.wideRoundBtnText}>Already have an account? Login!</span>
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
    }
}
  
  export default Signup;