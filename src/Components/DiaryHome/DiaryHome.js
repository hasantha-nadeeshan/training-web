import React from 'react';
import './DiaryHome.css';
import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DiaryList from '../DiaryList/DiaryList';
import { InputBase } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {getAllCards,addNewCard } from '../../redux/actions/actions';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop:'60px',
      textAlign:'left',
      paddingLeft:'30px',
      paddingRight:'30px',
      marginBottom:'50px'
    },
    inputDescription:{
        color: 'primary',
        backgroundColor: 'rgba(31,117,240,0.4)',    
        borderRadius: '15px',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        width: '100%',
        minHeight:'150px'
    },
    btn:{
        color:"#2074F0"
    },
    inputTitle: {
        color: 'primary',
        backgroundColor: 'rgba(31,117,240,0.9)',    
        borderRadius: '15px',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '30%',
          '&:focus': {
            width: '70%',
          },
        },
      },
  }));

const DiaryHome = () => {
    const classes = useStyles();
    const dispatch =useDispatch();
    const data =useSelector((state)=>state.diaryCardReducer);
    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    
    useEffect(() => {
        dispatch(getAllCards());
    }, [dispatch]);


    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(getAllCards());
        const card = {title, description, user:'hazi'}
            if (!(description === "") && !(title ==="")){
                 dispatch(addNewCard(card));
            }
        setTitle('');
        setdescription('');
    }

    return ( 
            <div>
                <div className={classes.root}>
                    <p className="title">Home</p>
                    <form noValidate autoComplete="off" >
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={10} className="submit-title-text">
                                <InputBase 
                                    id="outlined-basic" 
                                    placeholder="Submit New"   
                                    variant="outlined" 
                                    fullWidth
                                    multiline 
                                    type="text"
                                    display="block" 
                                    required
                                    classes={{input: classes.inputTitle,}}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />  
                            </Grid>
                            <Grid item xs={12} sm={2} className="submit-btn" id="submit-btn1">
                                <button onClick={handleSubmit}> SUBMIT</button>
                            </Grid>
                            <Grid item xs={12} className="des-text">
                                <InputBase
                                    id="outlined-textarea"
                                    placeholder="Enter Description"
                                    multiline
                                    variant="outlined"
                                    classes={{input: classes.inputDescription,}}
                                    fullWidth
                                    required
                                    type="text"
                                    value={description}
                                    onChange={(e) => setdescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="submit-btn" id="submit-btn2">
                                <button onClick={handleSubmit}> SUBMIT </button>
                            </Grid>
                        </Grid>
                    </form> 
                </div>
                 {data.cards && <DiaryList cards={data.cards}/>}
            </div>
    );
}
 
export default DiaryHome;
