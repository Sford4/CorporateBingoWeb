import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

// context imports

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// Component imports
import OrgDetails from './orgDetails';
import UsersDetails from './usersDetails';

// Material UI
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const OrgAndUsersContainer = (props) => {
    const [tab, setTab] = useState(0);
    const [component, setComponent] = useState(<OrgDetails changesMade={props.changesMade} org={props.org} />)

    const selectTab = tab => {
        setTab(tab);
        switch (tab) {
            case 0:
                setComponent(<OrgDetails changesMade={props.changesMade} org={props.org} />);
                return;
            case 1:
                setComponent(<UsersDetails changesMade={props.changesMade} org={props.org} />);
                return;
            default:
                setComponent(<OrgDetails changesMade={props.changesMade} org={props.org} />);
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
                <Tab label="My Org" />
                <Tab label="Users" />
            </Tabs>
            <div style={{ borderTop: `1px solid ${COLORS.primary}`, maxHeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {component}
            </div>

        </Paper>
    )
  };
  
  export default OrgAndUsersContainer;