import React, { createContext, useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../constants/constants';

export const OrgContext = createContext();

const OrgContextProvider = (props) => {
    const [ org, setOrg ] = useState({});
    const [users, setUsers] = useState([]);
    const [boards, setBoards] = useState([]);
    const [ stuffToSave, setStuffToSave ] = useState(false);
    const [ saving, setSaving ] = useState(false);


    const getOrg = async (orgID) => {
        console.log('in get org', orgID)
        try {
            const request = await fetch(`${FULL_URL}/orgs/${orgID}`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
              })
              const org = await request.json();
              console.log('GOT ORG', org)
              setUsers(org.userList);
              setBoards(org.boards);
              setOrg(org);
            } catch(err) {alert(err)}
    }

    const saveOrg = async (orgToSave) => {
        setSaving(true);
        console.log('in save org', orgToSave)
        try {
            const request = await fetch(`${FULL_URL}/orgs/update/${orgToSave.id}`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
                body: JSON.stringify(orgToSave),
              })
              const org = await request.json();
              setSaving(false);
              setOrg(org);
              setStuffToSave(false);
            } catch(err) {alert(err)}
    }

    return (
        <OrgContext.Provider value={{ 
            contextOrg: org, 
            contextOrgUsers: users,
            contextOrgBoards: boards,
            updateOrg: setOrg, 
            getOrg: getOrg, 
            saveOrg, 
            setStuffToSave,
            stuffToSave,
            contextSetUsers: setUsers,
            setBoards,
            saving,
        }}>
            {props.children}
        </OrgContext.Provider>
    )
}

export default OrgContextProvider;