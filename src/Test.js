import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Button, FormControl, FormLabel, FormControlLabel, RadioGroup , Radio} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'
import react from './Data/react.json'
import javascript from './Data/javascript.json'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Test = ({formData}) => {
 let navigate = useNavigate()
const [lan]  = useState(formData.language)
const [count , setCount] = useState(1)
const [colorO , setColorO] = useState(false)
const [colorT , setColorT] = useState(false)
const [colorTh , setColorTh] = useState(false)
const [colorF , setColorF] = useState(false)
const [colorFi , setColorFi] = useState(false)
const [data , setData] = useState([])
const [optionVal , setOptionVal] = useState([])
 

   
  useEffect(() => {
    if(lan === "ReactJS"){
      setData(react)
    }else{
      setData(javascript)
    }
  },[lan])


   const newHandleSubmit = (e) => {
      e.preventDefault()
      let path = 'finalscore'
      navigate(path)
   }

  const handleInputValue = (e) => {
     e.preventDefault()
     for(let i = 1 ; i <= 5 ; i++){
      if(e.target.name === 'option'+i){
        optionVal[i-1] = e.target.value
        setOptionVal([...optionVal])
    }
     }
  }



  const handleChange = (event , value)=> {
    setCount(value)
  }

  

  return (
    <form  className='Test'  onSubmit = {newHandleSubmit}>
      <Grid container className='mainForm' >
        <Grid className='progress-btn' > 

        <Button style = {{ borderRadius :"20%" , border : "2px solid black"}}>1</Button>
        <Button style = {{ borderRadius :"20%" , border : "2px solid black"}} >2</Button>
        <Button style = {{ borderRadius :"20%" , border : "2px solid black"}}>3</Button>
        <Button style = {{ borderRadius :"20%" , border : "2px solid black"}}>4</Button>
        <Button style = {{ borderRadius :"20%" , border : "2px solid black"}}>5</Button>
      </Grid>
          <Grid className='mcq'> 
            {data.map((mcq, index) => count === mcq.id ? (
              <FormControl key = {index} component="fieldset">
              <FormLabel component="legend">{mcq.id}.{mcq.question}</FormLabel>
              <RadioGroup id = {"input"+ mcq.id} name = {"option"+ mcq.id}  onChange = {(e) => handleInputValue(e, mcq.id)}>
               {mcq.options.map((newData, index) => (
            <FormControlLabel  key = {newData}  value = {newData} control={<Radio size="small" />} label= {newData} ></FormControlLabel>
        ))}
    </RadioGroup>
          </FormControl>
            ) : null)}
          </Grid>
          <Grid> 
         <Button type = "submit" variant="contained" color="secondary" > Submit </Button>
          </Grid>
           <Grid>
           <Pagination id = "pagination" count={5} page = {count} color="primary"  onChange={handleChange} />
           </Grid>
      </Grid>
    

    </form>
  )
}

export default Test