import React from 'react'
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
import { FormControl}  from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

 import react from './Data/react.json'
 import javascript from './Data/javascript.json'
 import { useState } from 'react'



const Test = ({formData}) => {
 
  const lan  = formData.language

  // const [count , setCount] = useState(1)
  // const [color , setColor] = useState(false)
  const [data , setData] = useState([])
 

  if(lan === "ReactJS"){
    console.log(react)
  }else{
    console.log(javascript)
  }

  return (
    <form  className='Form'  onSubmit = {(e) => e.preventDefault()}>
      <Grid container alignItems="center" justifyContent="center" direction="column">
        <Grid className = 'button'> 
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
      </Grid>
          <Grid> 
        
          </Grid>
          <Grid> 
         <Button type = "submit" variant="contained" color="secondary" > Submit </Button>
          </Grid>
           <Grid>
           <Pagination count={5} color="primary" />
           </Grid>
      </Grid>
    

    </form>
  )
}

export default Test