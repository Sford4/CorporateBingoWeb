import React from 'react';

// Style imports
import { MASTER, COLORS } from '../styles/masterStyles';

const TextContentMaker = (props) => {
    console.log(props.content)

    const deleteItem = id => {
        if(confirm(`Are you sure? You'd be deleting this item forever!`)){
            console.log('deleting', id)
            const itemsWithoutDeleted = props.content.filter(item => item.id !== id);
            props.updateContent(itemsWithoutDeleted);
        }
    }

    const setText = (id, content) => {
        const itemsWithUpdate = props.content.map(item => {
            if(item.id === id){
                return { ...item, text: content };
            }
            return item;
        })
        props.updateContent(itemsWithUpdate);
    }

    const addParagraph = () => {
        const lastItemID = props.content[props.content.length - 1].id;
        console.log('adding')
        props.updateContent([ 
            ...props.content, 
            {
                id: lastItemID + 1,
                type: 'paragraph',
                text: '',
            }
        ]);
    }

    const displayContent = () => {
        if(!props.content.length){
            return <div>No content to display</div>
        }
        return props.content.map(item => {
            return (
                <div style={{ width: '100%' }} key={item.id}>
                    <span style={styles.deleteX} onClick={() => deleteItem(item.id)}>x</span>
                    <textarea 
                        style={{ ...MASTER.wideRoundTextArea, width: '100%' }} 
                        value={item.text} 
                        onChange={e => setText(item.id, e.target.value)} 
                        placeholder={'Your content for this paragraph'}
                    />
                </div>
            )
        })
    }

    return (
        <div style={styles.container}>
            {displayContent()}
            <span style={styles.addNewBtn} onClick={() => addParagraph()}>+ Add paragraph</span>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    deleteX: {
        color: 'white',
        backgroundColor: 'gray',
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        position: 'absolute',
        textAlign: 'center',
        right: '5%',
        cursor: 'pointer'
    },
    addNewBtn: {
        cursor: 'pointer',
    }
}

export default TextContentMaker;