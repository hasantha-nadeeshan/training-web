import React from 'react';
import './DiaryHome.css';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import useFetch from '../../Hooks/useFetch';
import DiaryList from '../../Components/DiaryList/DiaryList';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1 
    },
    submit: {
        background: "rgba(32,116,240,0.3)",
        borderRadius:"25px",
        maxHeight:'40px'    
    },
    description:{
        background: "#02A9DE",
        borderRadius:"10px",
        minHeight:"100px",
        marginTop:"10px"
    },
    btn:{
        color:"#2074F0"
    }
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
        <div className="Home">
        <div>
        <div className={classes.root}>
            <form noValidate autoComplete="off" >
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={10} className="submit-title-text">
                        <TextField 
                            id="outlined-basic" 
                            placeholder="Submit New"   
                            variant="outlined" 
                            fullWidth 
                            type="text" 
                            required
                            InputProps={{ className: classes.submit }}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />   
                    </Grid>
                    <Grid item xs={12} sm={2} className="submit-btn" id="submit-btn1">
                        <button onClick={handleSubmit}> SUBMIT</button>
                    </Grid>
                    <Grid item xs={12} className="des-text">
                        <TextField
                            id="outlined-textarea"
                            placeholder="Enter Description"
                            multiline
                            variant="outlined"
                            InputProps={{ className: classes.description }}
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
        </div>
    );
}
 
export default DiaryHome;
