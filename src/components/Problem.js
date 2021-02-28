import React from "react";
import "./Problem.css";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

function Problem({ name, difficulty, status, id }) {
  return (
    <div className="problem_container">
      <li className="problem_name">
        <Link className="problem_nav" to={`/problems/${id}`}>
          {name}
        </Link>
      </li>
      <div className="problem_difficulty">{difficulty}</div>
      <div className="problem_status">{status}</div>
      <div  className="close_icon">
        <CloseIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Problem;
