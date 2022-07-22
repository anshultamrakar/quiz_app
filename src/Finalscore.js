import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { PieChart } from 'react-minimal-pie-chart';
import {Grid , Paper} from '@material-ui/core';
import { useState, useEffect } from 'react';

import react from './Data/react.json'
import javascript from './Data/javascript.json'
import {useLocation} from 'react-router-dom'

const Finalscore = () => {
const location = useLocation()
const [language]  = useState(location.state.language)

const answer  = location.state.selectedAnswer 

const [rigthAnswer , setRigthAnswer] = useState(0)
const [wrongAnswer , setWrongAnswer ] = useState(0)



useEffect(() => {
  let data
  if(language === "ReactJS"){
     data = react
  }else{
     data = javascript
  }

  const correctAnswer = []
  let totalCorrect = 0
  let totalInCorrect = 0

  data.map((item)=>{
      correctAnswer.push(item.answer)
  })
  
  for(let i=0;i<answer.length;i++){
      if(answer[i] === correctAnswer[i]){
          totalCorrect = totalCorrect+1
      }else if(answer[i] !== correctAnswer[i]){
          totalInCorrect = totalInCorrect+1
      }
  }
  setRigthAnswer(totalCorrect)
  setWrongAnswer (totalInCorrect)
}
,[answer, language])


  return (
    <Paper >
     <header>
        <AppBar position="static" >
             <Toolbar>
             <Typography> Your Score </Typography>
             </Toolbar>
        </AppBar> 
   </header>
      <Grid style = {{ display :"flex", flexDirection : 'column', justifyContent : "center", alignItems : "center" }} >
         <h2>Correct Answers : {rigthAnswer} </h2>
         <br/>
         <h2> Wrong Answers : {wrongAnswer} </h2>
      </Grid>
      <br/>
      <Grid  style = {{marginLeft : "500px"}} item className = "grid-wrapper">
      <PieChart
 

   center={[50, 50]}
   data={[
     {
     color: "#C13C37",
     title: "Correct Answer",
     value:  rigthAnswer ,
     },
     {
     color: "#6A2135",
     title: "Wrong Answer",
     value: wrongAnswer,
     },
   ]}
   labelPosition={72}
   lengthAngle={360}
   lineWidth={15}
   paddingAngle={0}
   radius={50}
 
   startAngle={0}
   viewBoxSize={[300, 300]}
   label={(data) => Math.ceil(data.dataEntry.percentage) + '%'}    
     labelStyle={{
     fontSize: "5px",
     fill: "#3a3a3a",
     fontWeight: "800",
     fontFamily: 'sans-serif',
            }}/>
      </Grid>
    </Paper>
  )
}

export default Finalscore