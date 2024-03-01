import React, { useState } from 'react'

const Quiz = ({questions}) => {

  const [quesNo,setQuesNo] = useState(0)
  const [isSelected,setSelected] = useState(false)
  const [optionNo,setOptionNo] = useState(-1)
  const [score,setScore] = useState(0)
  const [showScore,setShowScore] = useState(false)

  let current_question = questions[quesNo]
  console.log(questions)

  let options = current_question.options.map((option,index)=>{

    return (
    <div className="option" key={index} onClick={()=>{ 
    setOptionNo(index)
    setSelected(true)
    }}>  
    {option}  
    </div>
    )

  })

  function handleSubmit(){

  // if no option is selected return
  if(optionNo == -1)
  return;

  // if marked option is correct
  if(current_question.correct == current_question.options[optionNo])
  setScore(score+1)

  // if it was the last question then display score
  if(quesNo == questions.length-1)
  setShowScore(true)

  else{
    setQuesNo(quesNo+1)
    setOptionNo(-1)
    setSelected(false)
  }

  }

  return (
        <div className='ques'>
            <div>{current_question.question}</div>

            <div className="options">
                {options}
            </div>

            <button onClick={handleSubmit}>Next</button>
        </div>        
  )
}

export default Quiz
