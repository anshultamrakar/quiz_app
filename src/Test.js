import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, FormControl, FormLabel, FormControlLabel, RadioGroup , Radio , Grid , Paper} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination'
import react from './Data/react.json'
import javascript from './Data/javascript.json'
import { useState , useEffect } from 'react'
import { useHistory , useLocation } from 'react-router-dom'





const Test = () => {

 const history = useHistory()
 const location = useLocation()


const [lan]  = useState(location.state.language)
const [count , setCount] = useState(1)
const [optionVal , setOptionVal] = useState([])
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



const handleSubmit = (e) => {
  e.preventDefault()
  history.push({
    pathname: "/finalscore",
    state : {
      selectedAnswer : optionVal,
      language : lan
    } ,
  });
}

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
    <Paper>
    <header className = "Header">
    <AppBar position="static" >
         <Toolbar>
         <Typography> Welcome to the test  </Typography>
         </Toolbar>
    </AppBar> 
</header>
  
 <form id="submitForm" autoComplete="off"  className='Test'  onSubmit = {handleSubmit}>
      <Grid style = {{marginTop : "70px"}} spacing={10}  className="main-container" container alignItems="center" justifyContent="center" direction='column' >
        <Grid  className="grid-wrapper-top" style={{ justifyContent : "center", alignItems : "center", gap : "20px"  }} >
        <Button  className = "progress-bar1" variant="contained"  style = {{ backgroundColor : color1 ? "red" : "#f5f5f5"}} onClick = {() => trigerBtn(1)} >1</Button>
        <Button  className ="progress-bar2"  style = {{ backgroundColor : color2 ? "red" : "#f5f5f5" , marginLeft : "20px"}} onClick = {() => trigerBtn(2)} >2</Button>
        <Button   className="progress-bar3"  style = {{ backgroundColor : color3 ? "red" : "#f5f5f5", marginLeft : "20px"}} onClick = {() => trigerBtn(3)} >3</Button>
        <Button   className="progress-bar4"  style = {{ backgroundColor : color4 ? "red" : "#f5f5f5",marginLeft : "20px"}} onClick = {() => trigerBtn(4)} >4</Button>
        <Button  className ="progress-bar5"  style = {{ backgroundColor : color5 ? "red" : "#f5f5f5",marginLeft : "20px"}} onClick = {() => trigerBtn(5)} >5</Button>
        </Grid>
          <Grid style = {{marginTop : "70px"}} className='grid-wrapper'> 
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
          <Grid item className = "grid-wrapper"> 
            <Button type = "submit" variant="contained" color="secondary" > Submit </Button>
          </Grid>
           <Grid className = "grid-wrapper">
           <Pagination id = "pagination" count={5} page = {count} color="primary"  onChange={handleChange} />
           </Grid>
      </Grid>
    </form>
    </Paper>
  )
}

export default Test