import React from 'react';
import './DiaryCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import propTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        
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

const DiaryCard = ({card}) => {
    const classes = useStyles();
    
    const truncatedDescription = ((des)=>{
        if (des.length > 100){
            return (des.substring(0,100)+'...')
        }
        else{
            return des;
        }
    });

    return (
        <div className="card-container" >
            <Card className={classes.root}>
                <CardContent className="card-content" textOverflow="ellipsis">
                    <Typography variant="h5" component="h2">
                        {card.title}
                    </Typography>
                    <Typography  component="h6" style={{color:'#808080'}}>
                        {card.user}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {card.author}
                    </Typography>
                    <Typography variant="body2" component="p" style={{ wordWrap: 'break-word' }} >
                        {truncatedDescription(`${card.description}`)}
                    </Typography>
                    
                </CardContent>
        <CardActions className="card-btn-bar">
            <Button size="small" className={classes.btn}>Show More</Button>
        </CardActions>
        </Card>
    
    </div>
     );
}
DiaryCard.propTypes = {
    card:propTypes.object.isRequired
};
 
export default DiaryCard;