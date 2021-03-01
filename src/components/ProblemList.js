import React from "react";
import "./ProblemList.css";
import Problem from "./Problem.js";
import ReactPaginate from "react-paginate";
import {Link} from 'react-router-dom'

function ProblemList({
  Problems,
  setTemp,
  temp,
  setProblems,
  totalPages,
  paginate,
}) {
  const handleChangeAndFilter = (e) => {
    let query = e.target.value;
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
      <div className="footer">
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          previousLabel={"<"}
          nextLabel={">"}
          containerClassName={"pagination"}
          subContainerClassName={"pages_pagination"}
          activeClassName={"active"}
          onPageChange={paginate}
        />
        <div className="credit">Developed By:<Link to={{pathname: "https://www.linkedin.com/in/patrickngsf/"}} target="_blank"> Patrick Ng</Link></div>
      </div>
    </div>
  );
}

export default ProblemList;
