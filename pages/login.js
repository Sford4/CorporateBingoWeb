import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../constants/constants';

// context imports
import { UserContext } from '../contexts/userContext';
import { OrgContext } from '../contexts/orgContext';

// Style imports
import { MASTER, COLORS } from '../styles/masterStyles';

const Login = () => {

    const { user, storeUser } = useContext(UserContext);
    const { contextOrg, getOrg } = useContext(OrgContext);

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(user.id && localStorage.getItem('bingo_token')){
            router.push('/joinGame');
        }
      }, [user])

    const login = async () => {
        if(!email || !password){
            alert('Must have both email and password!')
            return;
        }
        try {
            const request = await fetch(`${FULL_URL}/users/login`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json'
                // },
                body: JSON.stringify({
                    email,
                    password,
                })
              })
              const user = await request.json();
              if(!user.token){
                  alert('Something went wrong... please try again later');
                  return;
              }
              storeUser(user);
              console.log({user})
              if(user.org && !contextOrg.id){
                  getOrg(user.org);
              }
              router.push('/joinGame');
            } catch(err) {alert(err)}
    }

    const goToSignup = () => {
        router.push('/signup');
    }

    const goToForgotPassword = () => {
        router.push('/forgotPassword');
    }

    return (
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div style={MASTER.pageTitle}>LOGIN</div>
                <input 
                    style={MASTER.wideRoundInput} 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder={'Email'}
                    type='email'
                />
                <input 
                    style={MASTER.wideRoundInput} 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder={'Password'}
                    type='password'
                />
                <button 
                    style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                    onClick={() => login()}
                >
                    <span style={MASTER.wideRoundBtnText}>Login</span>
                </button>
                <button 
                    style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                    onClick={() => goToSignup()}
                >
                    <span style={MASTER.wideRoundBtnText}>No account yet? Signup!</span>
                </button>
                <button 
                    style={{ ...MASTER.wideRoundBtn, marginTop: 20, backgroundColor: 'lightgray' }} 
                    onClick={() => goToForgotPassword()}
                >
                    <span style={MASTER.wideRoundBtnText}>Forgot my password</span>
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
  }
  
  export default Login;