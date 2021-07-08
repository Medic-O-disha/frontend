import React from 'react';
import './App.css';
import MediaCard from './MediaCard.js';
import MediaCardHospital from './MediaCardHospital';
import MediaCardNgo from './MediaCardNgo';
import { Grid } from '@material-ui/core/';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Background from './asset/bg2.jpg' ;

const useStyles = makeStyles((theme) =>({
      
    root : {
        minHeight : "100vh",
        backgroundImage: `url(${Background})`
       
    },
  
  })); 


const Home  = () =>{

    const classes  =  useStyles();
    return (
        <div className={classes.root}>

        <Navbar/>
         
        
        <Grid container justify= "center"  >
          <Grid item xs = {4}  >
          <MediaCard />
          </Grid>
          
          <Grid item xs = {4} >
          <MediaCardHospital />
          </Grid>
          
          <Grid item xs = {4} >
          <MediaCardNgo />
          </Grid>

        </Grid>

        
     
   </div>
    )
};

export default Home ;