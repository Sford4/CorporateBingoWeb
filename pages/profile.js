

import { useState, useEffect, useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../constants/constants';

// context imports
import { UserContext } from '../contexts/userContext';

// Style imports
import { MASTER } from '../styles/masterStyles';

// Component imports
import Layout from '../components/Layout';

const EditUser = (props) => {

    const { user, storeUser, logout } = useContext(UserContext);


    const [userID, setUserID] = useState(user.user_id);
    const [userName, setUserName] = useState(user.userName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if(user && user._id){
            setUserID(user._id);
            setUserName(user.userName);
            setEmail(user.email);
        }
    },[user]);

    const openWarning = (message) => {
        alert(
            `Woah there! ${message}`,
        );
    }

    const validEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const updateUser = async () => {
        if(!userName){
            openWarning('Must have a username!');
            return;
        }
        if(!email || !validEmail(email)){
            openWarning('Must have a valid email!');
            return;
        }
        if(password && password !== confirmPassword){
            openWarning('Passwords must match!');
            return;
        }
        console.log({userID})
        try {
            const request = await fetch(`${FULL_URL}/users/${userID}`, {
                method: 'PATCH',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
                body: JSON.stringify({
                    _id: userID,
                    userName,
                    email,
                    password,
                    role: {
                        org: user.role.org,
                        level: user.role.level
                    },
                })
              })
              const res = await request.json();
              console.log('from backend', {res})
              if(res && res._id){
                storeUser(res);
              } else {
                  alert('There was a problem updating this user...');
              }
        } catch (err) { alert( err ) }
    }

    const deleteUser = async () => {
        if(confirm(`Are you sure? This will delete ${userName} forever!`)){
            try {
                const request = await fetch(`${FULL_URL}/users/${userID}`, {
                    method: 'DELETE',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                    },
                  })
                  const response = await request.json();
                  if(response && response._id){
                    logout()
                  } else {
                      alert('There was a problem deleting this user...');
                  }
            } catch (err) { alert( err ) }
        }
    }


    return (
        <Layout>
            <div style={styles.container}>
                <div style={{ ...MASTER.pageTitle, alignSelf: 'flex-start' }}>MY PROFILE</div>
                <div style={styles.subcontainer}>
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
                        placeholder={'New Password'}
                    />
                    <input 
                        style={MASTER.wideRoundInput} 
                        value={confirmPassword} 
                        onChange={e => setConfirmPassword(e.target.value)} 
                        type='password'
                        placeholder={'Confirm New Password'}
                    />
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* <button 
                            style={{ ...MASTER.wideRoundBtn, backgroundColor: 'red', marginTop: 20 }} 
                            onClick={() => deleteUser(user._id)}
                        >
                            <span style={MASTER.wideRoundBtnText}>Delete User</span>
                        </button> */}
                        <button 
                            style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                            onClick={() => updateUser()}
                        >
                            <span style={MASTER.wideRoundBtnText}>Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
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
        paddingBottom: 10,
        minWidth: 300
    },
    subcontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        maxWidth: 400,
        marginTop: 50,
    }
}
  
  export default EditUser;