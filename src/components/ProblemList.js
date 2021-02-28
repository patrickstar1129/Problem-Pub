import React from "react";
import "./ProblemList.css";
import Problem from "./Problem.js";

function ProblemList({ Problems }) {
  return (
    <div className="problem_list_container">
      {/* <div className="problem_container">
        <div className="problem_name">Name</div>
        <div className="problem_difficulty">Difficulty</div>
        <div className="problem_status">Status</div>
      </div> */}
      {Problems.map((problem) => {
        return (
          <Problem
            key={problem._id}
            name={problem.name}
            difficulty={problem.difficulty}
            status={problem.status}
            id={problem._id}
          />
        );
      })}
    </div>
  );
}

export default ProblemList;
