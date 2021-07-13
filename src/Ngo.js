import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider , Grid } from '@material-ui/core';
import TableU from './TableU';
import TableH from './TableH';
import Title from './Title'
import Stock from './Stock';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({

    root : {
      margin : '0px',
    },

    stock : {
       marginTop : '20px',
    },

}));



function Ngo (){ 

    const classes = useStyles();
    return(
        <div>
        <h1>💮 Hello , SunShine NGO </h1> 
        <Fab color="secondary" aria-label="edit">
        <EditIcon />
        </Fab>
        <Grid container className = {classes.root} spacing ={6} justify = 'center' >
         <Grid item md={10}  >
             <Title>Needs Of Normal Users </Title>
             <TableU  />
         </Grid>

         <Grid item md={10}  >
             <Title>Needs Of Hospital </Title>
             <TableH/>
         </Grid>

        </Grid>

        <Divider/>

        <Grid container className = {classes.stock} spacing ={6}  justify = 'center'  >
        <Grid item md={10}  >
        <Title>Stocks left With Us </Title>
            <Stock/>
        </Grid>

        </Grid>


        </div>
    
    )
}

export default Ngo ;