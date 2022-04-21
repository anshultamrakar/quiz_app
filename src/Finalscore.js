import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import react from './Data/react.json'
import javascript from './Data/javascript.json'


const Finalscore = ({formData, optionVal}) => {

const [language]  = useState(formData.language)

const answer  = optionVal

const [rigthAnswer , setRigthAnswer] = useState(0)
const [wrongAnswer , setWrongAnswer ] = useState(0)



useEffect(() => {
   let data;
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
    <div className='score'>
      <Grid>
         <h2>Correct Answers : {rigthAnswer} </h2>
         <br/>
         <h2> Wrong Answers : {wrongAnswer} </h2>
      </Grid>
      <br/>
      <Grid>
      <PieChart
   animation
   animationDuration={500}
   animationEasing="ease-out"
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
   labelPosition={50}
   lengthAngle={360}
   lineWidth={15}
   paddingAngle={0}
   radius={50}
   rounded
   startAngle={0}
   viewBoxSize={[100, 100]}
   label={(data) => Math.round(data.dataEntry.percentage) + '%'}    
     labelStyle={{
     fontSize: "5px",
     fill: "#3a3a3a",
     fontWeight: "800",
     fontFamily: 'sans-serif',
            }}
      />
      </Grid>
    </div>
  )
}

export default Finalscore