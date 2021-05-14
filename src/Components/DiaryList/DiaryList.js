import React from 'react';
import './DiaryList.css';
import propTypes from 'prop-types';
import DiaryCard from '../../Components/DiaryCard/DiaryCard';
import Grid from '@material-ui/core/Grid';

const DiaryList = ({cards}) => {

    return (
      <div className="card-list">
        <Grid container spacing={0}>
            {cards.map(card => (
                <Grid item xs={12} sm={6} md={3} className="card-preview" key={card.created} >
                  <DiaryCard card={card} />
              </Grid>
            ))}
      </Grid>
      </div>
    ); 
  };
  DiaryList.propTypes = {
        cards:propTypes.array.isRequired
  };
  export default DiaryList;
 