import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

// context imports

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// Component imports
import BoardSettings from './BoardSettings';
import BoardTeamsOrPlayers from './BoardTeamsOrPlayers';
import BoardBuilder from './BoardBuilder/BoardBuilder';
import BoardRewards from './BoardRewards';

// Material UI
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const ManageBoardContainer = (props) => {
    const [tab, setTab] = useState(0);
    const [component, setComponent] = useState(<BoardSettings changesMade={props.changesMade} board={props.board} />)

    const selectTab = tab => {
        setTab(tab);
        switch (tab) {
            case 0:
                setComponent(<BoardSettings changesMade={props.changesMade} board={props.board} />);
                return;
            case 1:
                setComponent(<BoardBuilder changesMade={props.changesMade} board={props.board} />);
                return;
            case 2:
                setComponent(<BoardTeamsOrPlayers changesMade={props.changesMade} board={props.board} />);
                return;
            case 3:
                setComponent(<BoardRewards changesMade={props.changesMade} board={props.board} />);
                return;
            default:
                setComponent(<BoardSettings changesMade={props.changesMade} board={props.board} />);
                return;
        }
    }
    


    return (
        <Paper>
            <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={(e, val) => selectTab(val)}
                aria-label="manage boards views tabs"
                variant='fullWidth'
                centered
            >
                <Tab label="Settings" />
                <Tab label="Board" />
                <Tab label={props.board.groups.useTeams ? 'Teams' : 'Players'} />
                <Tab label="Rewards" />
            </Tabs>
            <div style={{ borderTop: `1px solid ${COLORS.primary}`, maxHeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {component}
            </div>

        </Paper>
    )
  };
  
  export default ManageBoardContainer;