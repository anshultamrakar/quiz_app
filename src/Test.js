import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Button, FormControl, FormLabel, FormControlLabel, RadioGroup , Radio} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'
import react from './Data/react.json'
import javascript from './Data/javascript.json'
import { useState , useEffect } from 'react'





const Test = ({formData, newHandleSubmit, optionVal , setOptionVal}) => {


const [lan]  = useState(formData.language)
const [count , setCount] = useState(1)

const [color1 , setColor1] = useState(0)
const [color2 , setColor2] = useState(0)
const [color3, setColor3] = useState(0)
const [color4 , setColor4] = useState(0)
const [color5 , setColor5] = useState(0)
const [data , setData] = useState([])

 


   
  useEffect(() => {
    if(lan === "ReactJS"){
      setData(react)
    }else{
      setData(javascript)
    }
  },[lan])


 

  const handleInputValue = (e, id) => {
     e.preventDefault()
     for(let i = 1 ; i <= 5 ; i++){
      if(e.target.name === 'option'+i){
        optionVal[i-1] = e.target.value
       setOptionVal([...optionVal])
      
    }
     }
     progressBar(id)
  }



const progressBar = (attempts) => {
     if (attempts === 1){
        setColor1(true)
     } 
     if (attempts === 2){
      setColor2(true)
   }
      if (attempts === 3){
    setColor3(true)
 }
      if (attempts === 4){
  setColor4(true)
 }
      if (attempts === 5){
  setColor5(true)
    }
  }

const trigerBtn = (trigger_count) => {
    setCount(trigger_count)
}

  const handleChange = (event , value)=> {
    setCount(value)
  }

  

  return (
 <form id="submitForm" autoComplete="off"  className='Test'  onSubmit = {newHandleSubmit}>
      <Grid container className="mainForm" >
        <Grid className = "progress-bar">
        <Button variant="contained"  style = {{ backgroundColor : color1 ? "red" : "pink"}} onClick = {() => trigerBtn(1)} >1</Button>
        <Button variant="contained"  style = {{ backgroundColor : color2 ? "red" : "pink"}} onClick = {() => trigerBtn(2)} >2</Button>
        <Button variant="contained"  style = {{ backgroundColor : color3 ? "red" : "pink"}} onClick = {() => trigerBtn(3)} >3</Button>
        <Button variant="contained"  style = {{ backgroundColor : color4 ? "red" : "pink"}} onClick = {() => trigerBtn(4)} >4</Button>
        <Button variant="contained"  style = {{ backgroundColor : color5 ? "red" : "pink"}} onClick = {() => trigerBtn(5)} >5</Button>
        </Grid>
          <Grid className='mcq'> 
            {data.map((mcq, index) => count === mcq.id ? (
              <FormControl key = {index} component="fieldset">
              <FormLabel  component="legend">{mcq.id}.{mcq.question}</FormLabel>
              <RadioGroup id = {"input"+ mcq.id} name = {"option"+ mcq.id}  value= {optionVal[index]} onChange = {(e) => handleInputValue(e, mcq.id)}>
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