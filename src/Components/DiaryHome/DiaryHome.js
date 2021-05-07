import React from 'react';
import './DiaryHome.css';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useFetch from '../../Hooks/useFetch';
import DiaryList from '../DiaryList/DiaryList';
import { InputBase } from '@material-ui/core';



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
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const {data:cards} = useFetch('http://localhost:8000/cards');   //for testing purposes

    const handleSubmit = (e) =>{
        e.preventDefault();
        const card = {title, body}
            if (!(body === "") && !(title ==="")){
            console.log('not empty');
            fetch('http://localhost:8000/cards',
            {   method: 'POST',
                headers:{"Content-Type": "application/json"
            },
            body: JSON.stringify(card)
        })
        
    }
        setTitle('');
        setBody('');
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
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="submit-btn" id="submit-btn2">
                                <button onClick={handleSubmit}> SUBMIT </button>
                            </Grid>
                        </Grid>
                    </form> 
                </div>
                 {cards && <DiaryList cards={cards}/>}
            </div>
    );
}
 
export default DiaryHome;
