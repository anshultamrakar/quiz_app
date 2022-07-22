import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';

import { Button, FormControl, FormControlLabel,RadioGroup,Radio, Grid, Paper} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'



const Form = () => {
    
  const history = useHistory();
  const [formData, setFormData] = useState({username : '',gender : '',language : ''})



  const handleSubmit = (e) => {
    e.preventDefault()
    history.push({
      pathname: '/test',
      state: { 
        language : formData.language, 
      },
  });  
}



const handleInput = (e) => {
  const {name , value} = e.target ;
  setFormData({...formData, [name] : value});
}


  return (
    <Paper>
    <header className='Header'>
        <AppBar position="static" >
             <Toolbar>
             <Typography> Quiz-App </Typography>
             </Toolbar>
        </AppBar> 
   </header>
    <form className='Form' onSubmit={handleSubmit}  >
     
      <Grid  style ={{marginTop : "20px"}}spacing={7} item className="main-container" container alignItems="center" justifyContent="center" direction="column">
    <Grid item className='grid-wrapper'>
    <TextField autoComplete='off' name = "username" value = {formData.username}  onChange = {handleInput}  id="name-input" label="Enter your name" required />
    </Grid>

    <Grid  item className="grid-wrapper">
    <FormControl  component="fieldset">
   <FormLabel component="legend">Please select your gender</FormLabel>
  <RadioGroup id = 'gender-input'  name = "gender"  value = {formData.gender} onChange = {handleInput}  aria-label="gender"  >
    <FormControlLabel value="female" control={<Radio required = {true} />} label="Female" />
    <FormControlLabel value="male" control={<Radio required = {true} />} label="Male" />
    <FormControlLabel value="other" control={<Radio required = {true} />} label="Other" />
  </RadioGroup>
</FormControl>
</Grid>

<Grid item className="grid-wrapper">
<FormControl   component="fieldset">
<FormLabel component="legend">Please select your language</FormLabel>
  <RadioGroup id = 'language-input'  value = {formData.language} onChange = {handleInput}  aria-label="language" name="language" >
    <FormControlLabel value="ReactJS" control={<Radio  required = {true}/>} label="React JS" />
    <FormControlLabel value="JavaScript" control={<Radio required = {true}  />} label="JavaScript" />
  </RadioGroup>
</FormControl>
</Grid>
<Grid item className="grid-wrapper">
<Button type = "submit" variant="contained" color="secondary">Submit</Button>
</Grid>
</Grid>
    </form>
   
    </Paper>
  )
}

export default Form