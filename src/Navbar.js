import React, { useState ,useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root : {
    flexGrow : 1,

  },

  appbarTransparent:{
    backgroundColor: 'rgba(0, 122, 122, 0.1)'
  },

  appbarSolid:{
    backgroundColor:'rgba(67,129,168)'
  },

  buttons : {
      color : 'none'
  },

  signin : {
      marginInlineStart : '200',
      marginLeft :'200',
  },

}));



function Navbar() {

  const classes = useStyles();
  const [navBackground,setnavBackground] = useState('appbarTransparent')
    
  const navRef = React.useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310 
      if(show){
        setnavBackground('appbarSolid')
      }
      else{
        setnavBackground('appbarTransparent')
      }
       
    }
    document.addEventListener('scroll',handleScroll)
    return () => {
      document.removeEventListener('scroll',handleScroll)
    }
  }, [])


    return (
          <div className = {classes.root}>
              <AppBar position="sticky" justify = "center" className = {classes[navRef.current]}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <h1>
            MEDIC <span > O </span> DISHA
          </h1>

          <div  >
          <ul className = {classes.buttons}>
          <Button  color="textSecondary" href="/">  <strong> HOME </strong> </Button>
          <Button  color="textSecondary" href="#contained-buttons">  <strong>IDEAS  </strong> </Button>
          <Button  color="textSecondary" href="/about"> <strong> ABOUT US </strong> </Button>
          
        
         </ul>
         </div>

         <div className={classes.signin}>
         <Button  color="textSecondary" href="/signup">  <strong> SIGN IN   </strong> </Button>
         </div>



    

        </Toolbar>
      </AppBar>
          </div>
        );
    }
    
    export default Navbar;
    