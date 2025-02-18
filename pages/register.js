

import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../constants/constants';

// context imports
import { UserContext } from '../contexts/userContext';

// Style imports
import { MASTER, COLORS } from '../styles/masterStyles';

const Register = () => {

    const { user, storeUser } = useContext(UserContext);

    const router = useRouter()
    
    const [orgName, setOrgName] = useState('');
    const [userAlias, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if(user.id && localStorage.getItem('bingo_token')){
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
    
    const register = async () => {
        if(!userAlias){
            openWarning('Must have a userAlias!');
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
            const request = await fetch(`${FULL_URL}/orgs/register`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json'
                // },
                body: JSON.stringify({
                    orgName,
                    userAlias,
                    email,
                    password,
                })
              })
              const user = await request.json();
              storeUser(user);
        } catch (err) { alert( err ) }
        
        
    }

    return (

        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div style={MASTER.pageTitle}>REGISTER</div>
                <div style={{ ...MASTER.pageTitle, fontSize: 24, margin: '10px 0 -20px 0' }}>ORG NAME</div>
                <input 
                    style={MASTER.wideRoundInput} 
                    value={orgName} 
                    onChange={e => setOrgName(e.target.value)} 
                    placeholder={'Org Name'}
                />
                <div style={{ ...MASTER.pageTitle, marginTop: 20 }}>ORG PAYMENT DEETS</div>
                <div style={{ ...MASTER.pageTitle, fontSize: 24, margin: '10px 0 -20px 0' }}>USER DETAILS</div>
                <input 
                    style={MASTER.wideRoundInput} 
                    value={userAlias} 
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
                    onClick={() => register()}
                >
                    <span style={MASTER.wideRoundBtnText}>Register</span>
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
  
  export default Register;