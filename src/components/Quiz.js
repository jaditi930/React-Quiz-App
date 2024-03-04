import React, { useState } from 'react'

const Quiz = ({questions}) => {

  const [quesNo,setQuesNo] = useState(0)
  const [optionNo,setOptionNo] = useState(-1)
  const [score,setScore] = useState(0)

  console.log(questions)

  function handleSubmit(){

  // if no option is selected return
  if(optionNo == -1)
  return;

  // if marked option is correct
  if(questions[quesNo].correct == questions[quesNo].options[optionNo])
  setScore(score+1)


  else{
    setQuesNo(quesNo+1)
    setOptionNo(-1)
  }

  }

  return (
    <>
    { quesNo < questions.length ? (
        <div className='ques'>
            <div>{questions[quesNo].question}</div>

        {
          questions[quesNo].options.map((option,index)=>{
            return (
          <div className="option" key={index} onClick={()=>{ setOptionNo(index)}}>  
          {option}  
          </div>
          )})
      }

            <button onClick={handleSubmit}>Next</button>
        </div>        
  ) : (
    <div className='score'>
    <div>Quiz Completed</div>
    <div>You scored {score} out of 2!</div>
    </div>
  )
    }
    </>
    )
}

export default Quiz
