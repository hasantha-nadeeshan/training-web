import React from 'react';
import './DiaryList.css';
import propTypes from 'prop-types';
import DiaryCard from '../../Components/DiaryCard/DiaryCard';
import Grid from '@material-ui/core/Grid';

const DiaryList = ({cards}) => {
  
    return (
        <Grid container spacing={0} className="card-list">
            {cards.map(card => (
                <Grid item xs={12} sm={4} className="card-preview" key={card.id} >
                  <DiaryCard card={card} />
              </Grid>
            ))}
      </Grid>
    ); 
  };
  DiaryList.propTypes = {
        cards:propTypes.array.isRequired
  };
  export default DiaryList;
 