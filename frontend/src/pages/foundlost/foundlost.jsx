import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CreateRequest from '../../components/lostfound/createRequest/createRequest';
import LostList from '../../components/lostfound/lostList/lostList';
import FoundList from '../../components/lostfound/foundList/foundList.jsx';
import YourRequest from '../../components/lostfound/yourRequest/yourRequest.jsx';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, border: 'none' }} >
        <Tabs value={value} onChange={handleChange}  >
          <Tab label="Found Requests"  sx={{color:'var(--colorPrimary)' , fontWeight:'800'}} />
          <Tab label="Lost Requests"  sx={{color:'var(--colorPrimary)' , fontWeight:'800'}} />
          <Tab label="Your Requests"  sx={{color:'var(--colorPrimary)' , fontWeight:'800'}} />
          <Tab label="Post A Request" sx={{color:'var(--colorPrimary)' , fontWeight:'800'}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FoundList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <LostList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <YourRequest/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
         <CreateRequest />
      </CustomTabPanel>
    </Box>
  );
}
