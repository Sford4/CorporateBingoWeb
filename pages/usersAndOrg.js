import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'

// context imports
import { OrgContext } from '../contexts/orgContext';
import { UserContext } from '../contexts/userContext';

// Style imports
import { MASTER } from '../styles/masterStyles';

// component imports
import Layout from '../components/Layout';
import OrgAndUsersContainer from '../components/orgAndUsers/orgAndUsersContainer';


const OrgAndUsersIndex = (props) => {
    const router = useRouter()
    
    const { contextOrg, saveOrg, getOrg, setStuffToSave, stuffToSave } = useContext(OrgContext);
    const { user } = useContext(UserContext);

  const [org, setOrg] = useState({});

  useEffect(() => {
    if(!contextOrg._id && user && user.org){
        getOrg(user.org);
    } else if(contextOrg && contextOrg._id) {
        setOrg(contextOrg);
    }
}, [contextOrg, stuffToSave])

  
if(contextOrg && contextOrg._id){
    return (
        <Layout>
            <div style={styles.container}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{ ...MASTER.pageTitle }}>MANAGING ORG: {contextOrg.name}</div>
                    {stuffToSave ?
                    <button 
                        style={{ ...MASTER.wideRoundBtn, width: 150, margin: 0 }} 
                        onClick={() => saveOrg(contextOrg)}
                        className='pulse-btn'
                    >
                        <div style={MASTER.wideRoundBtnText}>SAVE</div>
                    </button> :
                    <button 
                        style={{ ...MASTER.wideRoundBtn, width: 150, margin: 0, backgroundColor: 'gray' }} 
                    >
                        <div style={MASTER.wideRoundBtnText}>SAVE</div>
                    </button>}
                </div>
                <OrgAndUsersContainer org={contextOrg} changesMade={setStuffToSave} />
            </div>
            <style jsx>
                {`
                    .pulse-btn {
                      animation: shadow-pulse 1.5s infinite;
                    }
                    @keyframes shadow-pulse{
                        0% {
                            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
                        }
                        100% {
                            box-shadow: 0 0 0 30px rgba(0, 0, 0, 0);
                        }
                    }
                `}
            </style>
        </Layout>


      
    );
}
  return (
    <Layout>
        <div>NO ORG</div>
    </Layout>
  )
}
  
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
};

export default OrgAndUsersIndex;