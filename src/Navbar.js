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
    backgroundColor: 'rgba(67 , 129 , 168 , 0.5)'
  },

  appbarSolid:{
    backgroundColor:'rgba(67,129,168)'
  },

  buttons : {
      color : 'none'
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
          <Button  color="secondary" href="#contained-buttons">  <strong> HOME </strong> </Button>
          <Button  color="secondary" href="#contained-buttons"> <strong> ABOUT US </strong> </Button>
          <Button  color="secondary" href="#contained-buttons"> <strong>  CONTACT US </strong>  </Button>
          <Button  color="secondary" href="#contained-buttons">  <strong>DEVELOPERS  </strong> </Button>
        
         </ul>
         </div>

    

        </Toolbar>
      </AppBar>
          </div>
        );
    }
    
    export default Navbar;
    