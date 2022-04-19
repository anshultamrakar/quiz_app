import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (
   <header className = "Header">
        <AppBar position="static" >
             <Toolbar>
              <Typography variant="h4" >
                 Quiz-App
               </Typography>
             </Toolbar>
        </AppBar> 
   </header>
  )
}

export default Header