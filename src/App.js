import './App.css'
import React from 'react'
import {questions} from './api/questions'


function App() {
  const options = [];

  questions.forEach((question)=>{
    const option = [...question.incorrect_answers,question.correct_answer];
    option.sort(()=>Math.random()-0.5);
    options.push(option);
  })

  function decodeString(str){
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }
  
  return (
    <div>
        {questions.map((q,i)=>
          <div key={i} className="App">
            <h3 className="title">{decodeString(q.question)}</h3>
            <div>
              {options[i].map((ia,j)=>
                <span key={j} className="option" onClick={()=>alert(ia)}>{ia}</span>
              )}
            </div>
          </div>
        ) }
    </div>
  )
}

export default App
