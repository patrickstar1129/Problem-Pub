import React from 'react';
import './ProblemList.css';
import Problem from './Problem.js'

function ProblemList({Problems}) {

  return (
    <div className="problem_list_container">
      {Problems.map(problem => {
       return <Problem key={problem._id} name={problem.name} difficulty={problem.difficulty} status={problem.status} id={problem._id}/>
      })}
    </div>
  )
}

export default ProblemList
