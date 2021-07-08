import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Navbar from './Navbar';
import { Grid } from '@material-ui/core/';
import Satyajit from './Satyajit';
import Anshuman from './Anshuman';
import Aryan from './Aryan';
import Bani from './Bani';
import Background from './asset/new.png' ;


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Medic O disha 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
   
  root : {
    minHeight : "100vh",
    backgroundImage: `url(${Background})`
   
  },

  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: 'rgba(67,129,168,0.0)',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    maxWidth : '50' ,
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    maxHeight : " 60",
  },
}));



export default function Album() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <React.Fragment>
      <CssBaseline />

      <Navbar/>
     
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center"  color= "textSecondary" gutterBottom>
               A Quick Intro 
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
               We are a team full of Enthusiasm willing to manifest the best out of these hard times .
               We are giving our best efforts to help all the front line workers .
               We aim to make this into a full fleged working project which can be readily implemented ....

            </Typography>
            
          </Container>
        </div>
        <Grid container justify= "center"  >
          <Grid item xs = {4}  >
          <Satyajit />
          </Grid>
          
          <Grid item xs = {4} >
          <Anshuman />
          </Grid>
          
          <Grid item xs = {4} >
          <Bani/>
          </Grid>

          <Grid item xs = {4} >
          <Aryan/>
          </Grid>

        </Grid>
      </main>
      


      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thanks for visiting 
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Let's Serve , <span > Let's save lives </span>
        </Typography>
        <Copyright />
      </footer>
      
    </React.Fragment>
    </div>
  );
}