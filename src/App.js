import './App.css'
import React from 'react'
import {questions} from './api/questions'


function App() {
  function decodeString(str){
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }
  
  return (
    <div>
        {questions.map((q,i)=>
          <div key={i}>
            <h3>{decodeString(q.question)}</h3>
            {q.incorrect_answers.map((ia,j)=>
              <p key={j}>{ia}</p>
            )}
          </div>
        ) }
    </div>
  )
}

export default App
