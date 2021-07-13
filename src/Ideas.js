import React from 'react';
import {makeStyles} from '@material-ui/core/styles' ;
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Background from './asset/new.png' ;



const useStyles = makeStyles((theme) => ({

    grid : {
        width : '100%',
        margin : '0px',

    },

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
      },

      paper : {
          marginInlineStart : '100px',
          marginTop : '100px',
          padding : theme.spacing(10),
          backgroundColor : "#1976d2",
          

      },
      paper2 : {
        marginInlineStart : '100px',
        marginTop : '100px',
        padding : theme.spacing(10),
        backgroundColor : "#ffb74d",

    },
    paper3 : {
        marginInlineStart : '100px',
        marginTop : '100px',
        padding : theme.spacing(10),
        backgroundColor : "#f44336",

    },
    paper4 : {
        marginInlineStart : '100px',
        marginTop : '100px',
        padding : theme.spacing(10),
        backgroundColor : "#4caf50",

    },

    paper5: {
        marginInlineStart : '100px',
        marginTop : '100px',
        padding : theme.spacing(10),
        backgroundColor : "#e33371",

    },

    paper6 : {
        marginInlineStart : '100px',
        marginTop : '100px',
        padding : theme.spacing(10),
        backgroundColor : "#64b5f6",
        

    },
      main :{
        minHeight : "100vh",
        backgroundImage: `url(${Background})`
      },

      text:{
        color:"#ffffff",
        minwidth : '200%',
        justifyContent : 'space-evenly' ,
    },


}));





function Ideas(){
    const classes = useStyles();
    return (
        <div className = {classes.main} >
        <Navbar/>
        <Grid container spacing = {3} className = {classes.grid} >
            <Grid item >
            <div className={classes.root}>
            <Paper elevation={20} className = {classes.paper} md={6} >
            <Typography align="center" className={classes.text}  component="p" variant="body2" >
             The basic idea is to create a single platfrom which can handle the needs of the patients ,Hospitals 
             and NGOs 
            </Typography>
            </Paper>  

            <Paper elevation={20} className = {classes.paper2} md={6} >
            <Typography align="center" className={classes.text} component="p" variant="body2" >This text should be white</Typography>
            </Paper> 

            <Paper elevation={20} className = {classes.paper3} md={6} >
            <Typography align="center" className={classes.text} component="p" variant="body2" >This text should be white</Typography>
            </Paper> 

            <Paper elevation={20} className = {classes.paper4} md={6} >
            <Typography align="center" className={classes.text} component="p" variant="body2" >This text should be white</Typography>
            </Paper> 

            <Paper elevation={20} className = {classes.paper5} md={6} >
            <Typography align="center" className={classes.text} component="p" variant="body2"  >This text should be white</Typography>
            </Paper> 

            <Paper elevation={20} className = {classes.paper6} md={6} >
            <Typography align="center" className={classes.text} component="p" variant="body2" >This text should be white</Typography>
            </Paper> 

            </div>
            </Grid>
        </Grid>   
        </div>
        );

        

   
}

export default Ideas ; 