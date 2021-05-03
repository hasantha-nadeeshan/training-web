import React from 'react';
import './DiaryCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        backgroundColor:"#B9E9FF",
        textAlign:"left",
        borderRadius:"20px"                    //will be setting when using grids for more cards
      
    },
    pos: {
        marginBottom: 12,
    },
    btn: {
        borderRadius:"20px"    
    }
  });

const DiaryCard = () => {
    const classes = useStyles();

    const description = 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced 2'; //102 charcters for testing
    const truncatedDescription = (()=>{
        if (description.length > 100){
            return (description.substring(0,100)+'...')
        }
        else{
            return description;
        }
    });

    

    return ( 
        <div className="card-container">
            <Card className={classes.root}>
                <CardContent className="card-content" textOverflow="ellipsis">
                    <Typography variant="h5" component="h2">
                        Title
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Subtitle
                    </Typography>
                    <Typography variant="body2" component="p" style={{ wordWrap: 'break-word' }} >
                        {truncatedDescription()}
                    </Typography>
                    
                </CardContent>
        <CardActions className="card-btn-bar">
            <Button size="small" className={classes.btn}>Show More</Button>
        </CardActions>
        </Card>
    </div>
     );
}
 
export default DiaryCard;