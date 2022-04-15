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
    <div >
       <AppBar position="static">
            <Toolbar>
              <IconButton edge="start"  color="inherit" aria-label="menu">
              </IconButton>
              <Typography variant="h6" >
                Quiz-App
              </Typography>
            </Toolbar>
          </AppBar>
    </div>
  );
}


  
}
 
export default FrontPage;