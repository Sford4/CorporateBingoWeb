import { useState } from 'react';

// context imports

// Style imports
import { MASTER, COLORS } from '../../styles/masterStyles';

// Component imports
import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import Bios from '../../components/MapBiosLore/Bios';

// Material UI
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const MapBiosLore = (props) => {
    const [tab, setTab] = useState(0);
    const [component, setComponent] = useState(<Bios />)

    const selectTab = tab => {
        setTab(tab);
        switch (tab) {
            // case 0:
            //     setComponent(<div>MAPS</div>);
            //     return;
            case 1:
                setComponent(<Bios />);
                return;
            // case 2:
            //     setComponent(<div>LORE</div>);
            //     return;
            default:
                setComponent(<Bios />);
                return;
        }
    }
    


    return (
        <Layout>
            <div style={styles.container}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{ ...MASTER.pageTitle }}>MAP, BIOS & LORE</div>
                    <div />
                </div>
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
                        {/* <Tab label="Maps" /> */}
                        <Tab label="Bios" />
                        {/* <Tab label="Lore" /> */}
                    </Tabs>
                    <div style={{ borderTop: `1px solid ${COLORS.primary}`, maxHeight: 800, display: 'flex', justifyContent: 'center', overflowY: 'scroll' }}>
                        {component}
                    </div>

                </Paper>
            </div>
        </Layout>
    )
  };
  
  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  };
  
  export default MapBiosLore;