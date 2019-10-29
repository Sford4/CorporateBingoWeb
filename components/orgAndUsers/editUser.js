

import { useState, useEffect, useContext } from 'react';
import fetch from 'isomorphic-unfetch';
// import FULL_URL from '../../constants/constants';

// context imports

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

const EditUser = (props) => {

    const [userName, setUserName] = useState(props.user.userName);
    const [email, setEmail] = useState(props.user.email);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
            const request = await fetch(`http://localhost:8000/users/signup`, {
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
                        org: props.orgID,
                        level: 2
                    },
                })
              })
              const user = await request.json();
              if(user && user._id){
                props.openPopup(false, false);
                props.updateUsers('new', user);
              } else {
                  alert('There was a problem creating this user...');
              }
        } catch (err) { alert( err ) }
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
        try {
            const request = await fetch(`http://localhost:8000/users/${props.user._id}`, {
                method: 'PATCH',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
                body: JSON.stringify({
                    _id: props.user._id,
                    userName,
                    email,
                    password,
                    role: {
                        org: props.orgID,
                        level: 2
                    },
                })
              })
              const user = await request.json();
              console.log('from backend', {user})
              if(user && user._id){
                props.openPopup(false, false);
                props.updateUsers('edit', user);
              } else {
                  alert('There was a problem creating this user...');
              }
        } catch (err) { alert( err ) }
    }

    const deleteUser = async id => {
        if(confirm(`Are you sure? This will delete ${userName} forever!`)){
            try {
                const request = await fetch(`http://localhost:8000/users/${props.user._id}`, {
                    method: 'DELETE',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                    },
                  })
                  const response = await request.json();
                  if(response && response._id){
                    props.updateUsers('delete', id);
                    props.openPopup(false, false);
                  } else {
                      alert('There was a problem deleting this user...');
                  }
            } catch (err) { alert( err ) }
        }
    }


    return (
        <div style={styles.container}>
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
                {props.newUser ?
                    <button 
                        style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                        onClick={() => signup()}
                    >
                        <span style={MASTER.wideRoundBtnText}>Save</span>
                    </button> :
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <button 
                            style={{ ...MASTER.wideRoundBtn, backgroundColor: 'red', marginTop: 20 }} 
                            onClick={() => deleteUser(props.user._id)}
                        >
                            <span style={MASTER.wideRoundBtnText}>Delete User</span>
                        </button>
                        <button 
                            style={{ ...MASTER.wideRoundBtn, marginTop: 20 }} 
                            onClick={() => updateUser()}
                        >
                            <span style={MASTER.wideRoundBtnText}>Save</span>
                        </button>
                    </div>
                }
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
        paddingBottom: 10,
        minWidth: 300
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
  
  export default EditUser;