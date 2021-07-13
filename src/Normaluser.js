
import React from 'react';
import Hospitallist from './Hospitallist.js';
import { makeStyles  } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import satya from './asset/satya.jpeg';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';





const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    personal : {
     lineHeight: '0',
    },
    fab : {
        alignContent: 'center'
    }, 
  }));

  var name = "Satyajit" ;
  var age = 20 ;




function Normaluser (){
    const classes = useStyles();
    return(
        <div>

        <div className = {classes.personal} >
        <Box component="span" m={1}>
        <Avatar alt="Remy Sharp" src={satya} className={classes.large} />
        <h1>Hello {name} </h1>
        <h5>Age : {age}</h5>
        <Fab color="secondary" aria-label="edit" className = {classes.fab} >
        <EditIcon />
        </Fab>

        </Box>
        </div>
        <Hospitallist/>
        </div>
    )
}

export default Normaluser ;