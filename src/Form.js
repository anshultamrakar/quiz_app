import React from 'react'
import FormLabel from '@material-ui/core/FormLabel';
import { Button, FormControl, FormControlLabel,RadioGroup,Radio} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';




const Form = ({handleInput , handleSubmit , formData }) => {
    

  return (
    <form className='Form' onSubmit={handleSubmit}  >
    <TextField autoComplete='off' name = "username" value = {formData.username}  onChange = {handleInput}  id="standard-basic" label="Enter your name" required />
    <FormControl  component="fieldset">
   <FormLabel component="legend">Please select your gender</FormLabel>
  <RadioGroup value = {formData.gender} onChange = {handleInput}  aria-label="gender" name="gender" >
    <FormControlLabel value="female" control={<Radio required = {true} />} label="Female" />
    <FormControlLabel value="male" control={<Radio required = {true} />} label="Male" />
    <FormControlLabel value="other" control={<Radio required = {true} />} label="Other" />
  </RadioGroup>
</FormControl>

<FormControl   component="fieldset">
<FormLabel component="legend">Please select your language</FormLabel>
  <RadioGroup  value = {formData.language} onChange = {handleInput}  aria-label="language" name="language" >
    <FormControlLabel value="ReactJS" control={<Radio  required = {true}/>} label="React JS" />
    <FormControlLabel value="JavaScript" control={<Radio required = {true}  />} label="JavaScript" />
  </RadioGroup>
</FormControl>

<Button type = "submit" variant="contained" color="secondary">
  Submit
</Button>


    </form>
  )
}

export default Form