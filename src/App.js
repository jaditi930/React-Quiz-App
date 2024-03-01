import { useEffect, useState } from 'react'
import Quiz from './components/Quiz'
import './App.css'


function App() {

  const [questions,setQuestions] = useState([])

  useEffect(()=>{
  
  console.log("useeffect")

  fetch("http://localhost:3000/data.json")

  .then((response)=>response.json())

  .then((data)=>{
    console.log(data)
    setQuestions(data)
  })

  },[])

  return (
    <>
    <Quiz questions = {questions} />
    </>
  )
}

export default App;
