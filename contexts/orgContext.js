import React, { createContext, useState, useEffect } from 'react';

export const OrgContext = createContext();

const OrgContextProvider = (props) => {
    const [ org, setOrg ] = useState({})


    const getOrg = async (orgID) => {
        console.log('in get org', orgID)
        try {
            const request = await fetch(`http://localhost:8000/orgs/${orgID}`, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
              })
              const org = await request.json();
              console.log({org})
              setOrg(org);
            } catch(err) {alert(err)}
    }

    const saveOrg = async (orgToSave) => {
        console.log('in save org', orgToSave)
        try {
            const request = await fetch(`http://localhost:8000/orgs/${orgToSave._id}`, {
                method: 'PATCH',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                },
                body: JSON.stringify(orgToSave),
              })
              const org = await request.json();
              console.log({org})
              setOrg(org);
            } catch(err) {alert(err)}
    }

    return (
        <OrgContext.Provider value={{ contextOrg: org, updateOrg: setOrg, getOrg: getOrg, saveOrg }}>
            {props.children}
        </OrgContext.Provider>
    )
}

export default OrgContextProvider;