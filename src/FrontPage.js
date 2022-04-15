import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


class FrontPage extends Component {
  state = { 

   } 
   
  render() { 
   
  return (
    <div className='Body'>
      <header className = "Header">
       <AppBar position="static" >
            <Toolbar>
              <IconButton edge="start"  color="inherit" aria-label="menu">
              </IconButton>
              <Typography variant="h4" >
                Quiz-App
              </Typography>
            </Toolbar>
          </AppBar>
    </header>
    <main className='Main'>
      <form handleSubmit = {(e) => e.preventDefault()}>
        <p>
        <label>Enter your name </label>
        <input type = "text" placeholder='Enter your name'/>
        </p>
        <p>
        <label>Enter your Gender </label>
        <input type = "radio" placeholder='Enter your name'/>
        <label>Male</label>
        </p>
        <p>
        <label>Select your test </label>
        <input type = "radio" placeholder='Enter your name'/>
        <label>Male</label>
        </p>
        <button>Submit</button>
      </form>
    </main>
    </div>
    
   
  
  );
}


  
}
 
export default FrontPage;