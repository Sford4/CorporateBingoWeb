import React, { createContext, useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import FULL_URL from '../constants/constants';

const dummyBios = [
    {
        name: 'Ezmer',
        img: '',
        description: [
            {
                id: 1,
                type: 'paragraph',
                text: 'This is the first paragraph'
            },
            {
                id: 2,
                type: 'paragraph',
                text: 'This is the second paragraph',
            }
        ],
        world: 'Utah',
        bioType: 'Character',
        race: 'Human',
        faction: 'Knights',
        display: true,
        modified: new Date().getTime(),
    },
    {
        name: 'Peabody',
        img: '',
        description: [
            {
                id: 1,
                type: 'paragraph',
                text: 'This is the first paragraph'
            },
            {
                id: 2,
                type: 'paragraph',
                text: 'This is the second paragraph',
            }
        ],
        world: 'Utah',
        bioType: 'Character',
        race: 'Human',
        faction: 'Pirates',
        display: true,
        modified: new Date().getTime(),
    },
    {
        name: 'Waaaaagh',
        img: '',
        description: [
            {
                id: 1,
                type: 'paragraph',
                text: 'This is the first paragraph'
            },
            {
                id: 2,
                type: 'paragraph',
                text: 'This is the second paragraph',
            }
        ],
        world: 'Utah',
        bioType: 'Character',
        race: 'Orc',
        faction: 'Orcs',
        display: false,
        modified: new Date().getTime(),
    },
    {
        name: 'The Tavern',
        img: '',
        description: [
            {
                id: 1,
                type: 'paragraph',
                text: 'This is the first paragraph'
            },
        ],
        world: 'Utah',
        bioType: 'Location',
        race: 'N/A',
        faction: 'N/A',
        display: true,
        modified: new Date().getTime(),
    }
];

export const BiosContext = createContext();

const BiosContextProvider = (props) => {
    const [ bios, setBios ] = useState(dummyBios);
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

    const saveBio = async (bioToSave) => {
        setSaving(true);
        console.log('in save bio', bioToSave)
        try {
            const request = await fetch(`${FULL_URL}/bios/update/${bioToSave.id}`, {
                method: 'POST',
                // headers: {
                //   'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${localStorage.getItem('bingo_token')}`
                // },
                body: JSON.stringify(bioToSave),
              })
              const response = await request.json();
              const updatedBios = bios.map(bio => {
                  if(bio.id === response.id){
                      return response;
                  }
                  return bio
              })
              setSaving(false);
              setBios(updatedBios);
            } catch(err) {alert(err)}
    }

    return (
        <BiosContext.Provider value={{ 
            contextBios: bios, 
            updateBios: setBios, 
            getBios: getBios, 
            saveBio, 
            saving,
        }}>
            {props.children}
        </BiosContext.Provider>
    )
}

export default BiosContextProvider;