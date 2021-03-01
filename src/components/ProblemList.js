import React, { useState } from "react";
import "./ProblemList.css";
import Problem from "./Problem.js";
import ReactPaginate from 'react-paginate'

function ProblemList({ Problems, setTemp, temp, setProblems }) {
  const [pageNumber, setPageNumber] = useState(1)

   const handleChangeAndFilter = (e) => {
    let query = e.target.value
    const filtered = temp.filter((problem) => {
      return problem.name.toLowerCase().includes(query.toLowerCase());
    });
    setProblems(filtered);
  };

  return (
    <div className="problem_list_container">
      <input
        className="filter_input"
        placeholder="Search by Title"
        onChange={(e) => {
         handleChangeAndFilter(e);
        }}
      ></input>
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
