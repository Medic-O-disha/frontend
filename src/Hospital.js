
import React from 'react';
import TransferList from './TransferList';
import {  makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import TableH from './TableH';
import Title from './Title';







const useStyles = makeStyles((theme) => ({

    root : {
        minHeight : "100vh",
      
       marginBottom : '200',
       lineHeight: '1',
       
       
    },

    info : {
        justifyItems : "centre",
        lineHeight: '1',
        
        
    },

}));


function Hospital (){
    const classes = useStyles();
    var name = 'SCB MEDICAL';
    var regd = '54fr10';
    var beds = 10 ;
    return(
        
        <div className = {classes.root}>
        <div className = {classes.info}>
        
        <h1> 🏥 {name} </h1>
        <h5> Regd no : {regd}</h5>
        <h3> Total No of Beds: <b> {beds} </b> </h3>
        <Fab color="secondary" aria-label="edit">
        <EditIcon />
        </Fab>
        </div>

        
        
        <TransferList />
        
        <Title> Needs of Other Hospital NearBy </Title>

        <TableH/>

        </div>
        
        
    );
}

export default Hospital ;