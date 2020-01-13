

import { useState, useEffect, useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../../constants/constants';

// context imports

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

const EditUser = (props) => {

    const [userAlias, setUserName] = useState(props.user.userAlias);
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
        if(!userAlias){
            openWarning('Must have a user name!');
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
            const request = await fetch(`${FULL_URL}/users/signup`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json'
                // },
                body: JSON.stringify({
                    userAlias,
                    email,
                    password,
                    roleLevel: 2,
                    org: props.org.id,
                    orgName: props.org.orgName,
                })
              })
              const user = await request.json();
              if(user && user.id){
                props.openPopup(false, false);
                props.updateUsers('new', user);
              } else {
                  alert('There was a problem creating this user...');
              }
        } catch (err) { alert( err ) }
    }

    const updateUser = async () => {
        if(!userAlias){
            openWarning('Must have a user name!');
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
        console.log('user updating', props.user)
        try {
            const request = await fetch(`${FULL_URL}/users/update/${props.user.id}`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
                body: JSON.stringify({
                    id: props.user.id,
                    userAlias,
                    email,
                    password,
                    org: props.org.id,
                    orgName: props.org.orgName,
                    roleLevel: 2
                })
              })
              const user = await request.json();
              console.log('from backend', {user})
              if(user && user.id){
                props.openPopup(false, false);
                props.updateUsers('edit', user);
              } else {
                  alert('There was a problem updating this user...');
              }
        } catch (err) { alert( err ) }
    }

    const deleteUser = async id => {
        if(confirm(`Are you sure? This will delete ${userAlias} forever!`)){
            try {
                const request = await fetch(`${FULL_URL}/users/delete${props.user.id}`, {
                    method: 'POST',
                    // headers: {
                    //   'Accept': 'application/json',
                    //   'Content-Type': 'application/json',
                    //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                    // },
                  })
                  const response = await request.json();
                  if(response && response.id){
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
                    value={userAlias || ''} 
                    onChange={e => setUserName(e.target.value)} 
                    placeholder={'User Name'}
                />
                <input 
                    style={MASTER.wideRoundInput} 
                    value={email || ''} 
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
                            onClick={() => deleteUser(props.user.id)}
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