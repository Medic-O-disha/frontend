import React from 'react';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hospital from './Hospital';
import Normaluser from './Normaluser';
import Ngo from './Ngo';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },

    button : {
      align : 'right' ,
    },
  }));



function Dashboard (){

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return(
        <div>
        <Navbar/>

        <AppBar position="static" elevation = {20} >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Normal users " {...a11yProps(0)} />
          <Tab label="Hospitals"  {...a11yProps(1)} />
          <Tab label="NGO's" {...a11yProps(2)} />
           
          <Button variant="contained" color = "secondary" className = {classes.button} href = '/' >LOG OUT </Button> 
        </Tabs>
      </AppBar>
       
      

      <TabPanel value={value} index={0}   >
       <Normaluser/>
      </TabPanel>
      <TabPanel value={value} index={1}  >
        <Hospital/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Ngo/>
      </TabPanel>

      

      </div>


    )

};


export default Dashboard ;
