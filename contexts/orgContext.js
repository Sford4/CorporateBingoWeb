import React, { createContext, useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../constants/constants';

export const OrgContext = createContext();

const OrgContextProvider = (props) => {
    const [ org, setOrg ] = useState({});
    const [ stuffToSave, setStuffToSave ] = useState(false);


    const getOrg = async (orgID) => {
        console.log('in get org', orgID)
        try {
            const request = await fetch(`${FULL_URL}/orgs/${orgID}`, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
              })
              const org = await request.json();
              setOrg(org);
            } catch(err) {alert(err)}
    }

    const saveOrg = async (orgToSave) => {
        console.log('in save org', orgToSave)
        try {
            const request = await fetch(`${FULL_URL}/orgs/${orgToSave._id}`, {
                method: 'PATCH',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
                body: JSON.stringify(orgToSave),
              })
              const org = await request.json();
              setOrg(org);
              setStuffToSave(false);
            } catch(err) {alert(err)}
    }

    return (
        <OrgContext.Provider value={{ 
            contextOrg: org, 
            updateOrg: setOrg, 
            getOrg: getOrg, 
            saveOrg, 
            setStuffToSave,
            stuffToSave,
        }}>
            {props.children}
        </OrgContext.Provider>
    )
}

export default OrgContextProvider;