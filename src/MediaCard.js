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
    marginTop : 40 , 
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

 function MediaCard() {
  const classes = useStyles();

  return (
    <div className= "rows">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/people.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            <b> Normal <span color = "textSecondary"> users </span> </b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            All the users can get real time information regarding the availability of beds ,
            medication ,nearest HOSPITALS and NGO's that are ready to help  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >

        <Button size="medium" color="primary">
            <b>   GET STARTED </b> 
        </Button>
      
      </CardActions>
    </Card>
    </div>
  );
}

export default MediaCard;