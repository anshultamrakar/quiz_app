import React from 'react'
import Header from './Header'
import Form from "./Form"
import Test from "./Test"
import Finalscore from './Finalscore'
import { useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const App = () => {
 let navigate = useNavigate()

 const [formData, setFormData] = useState({username : '',gender : '',language : ''})

 const [optionVal , setOptionVal] = useState([])



const handleSubmit = (e) => {
    e.preventDefault()
    navigate('test');  
}

const newHandleSubmit = (e) => {
  e.preventDefault()
  navigate('finalscore')
}

const handleInput = (e) => {
    const {name , value} = e.target ;
    setFormData({...formData, [name] : value});
}


  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Form formData = {formData} 
        handleInput ={handleInput} 
        handleSubmit = {handleSubmit} />}/>
        <Route path = 'test' element = {<Test formData = {formData}  
        newHandleSubmit = {newHandleSubmit}
         optionVal = {optionVal}
         setOptionVal = {setOptionVal}
        />}/>
        <Route path = "finalscore" element = {<Finalscore formData = {formData} optionVal = {optionVal} />} />
      </Routes>
    </div>
  )
}

export default App


