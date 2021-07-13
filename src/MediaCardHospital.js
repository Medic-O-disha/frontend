import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    marginTop : 100 , 
    maxWidth: 300,
    marginInlineStart:70 ,
    shadowColor: "gray",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 30,
  },
  media: {

    height: 100,
  },
});

 function MediaCardHospital() {
  const classes = useStyles();

  return (
    <div className= "rows">
    <Card className={classes.root} elevation = {20} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            <b> HOSPITALS </b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            All  <b> HOSPITALS </b> can register and update real time vacancy of beds and medications 
            inorder to ensure that the real needy can get treatment 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >

        <Button size="medium" color="primary" href = "/signup" >
            <b>   GET STARTED </b> 
        </Button>
      
      </CardActions>
    </Card>
    </div>
  );
}

export default MediaCardHospital;