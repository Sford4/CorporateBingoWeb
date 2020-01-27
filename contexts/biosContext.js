import React, { createContext, useState, useEffect } from 'react';
import FULL_URL from '../constants/constants';

export const BiosContext = createContext();

const BiosContextProvider = (props) => {
    const [ bios, setBios ] = useState([]);
    const [ saving, setSaving ] = useState(false);


    const getBios = async (biosID) => {
        console.log('in get bios', biosID)
        try {
            const request = await fetch(`${FULL_URL}/bios`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
              })
              const bios = await request.json();
              console.log('GOT BIOS', bios)
              setBios(bios);
            } catch(err) {alert(err)}
    }

    return (
        <BiosContext.Provider value={{ 
            contextBios: bios, 
            contextSetBios: setBios, 
            getBios: getBios, 
            saving,
        }}>
            {props.children}
        </BiosContext.Provider>
    )
}

export default BiosContextProvider;