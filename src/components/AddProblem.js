import React, { useState } from "react";
import axios from "axios";
import "./AddProblem.css";
import ReactDOM from 'react-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function AddProblem({ open, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [status, setStatus] = useState("Incomplete");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert('Hey, looks like you forget to put down the name or text?')
      return
    }
    axios
      .post("/api/posts", {
        name: name,
        description: description,
        difficulty: difficulty,
        status: status,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      onClose();
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
    <div className="add_overlay"/>
      <div className="add_container">
        <HighlightOffIcon onClick={onClose} className="close_add" fontSize="large"></HighlightOffIcon>
        <div className="add_form">
          <div className="add_component">
            Name:
            <input
              type="text"
              value={name}
              className="add_input_name"
              placeholder="Reverse A LinkedList..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="add_component">
            Description:
            <textarea
            className="add_input_description"
              type="text"
              value={description}
              placeholder="Problem Description Here"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="add_component">
            Difficulty:
            <select className="add_select"onChange={(e)=> setDifficulty(e.target.value)}>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="add_component">
            Status:
            <select className="add_select" onChange={(e) => setStatus(e.target.value)}>
              <option value="Incomplete">Incomplete</option>
              <option value="Almost There">Almost There</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button onClick={handleSubmit} className="add_button">
            Submit
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default AddProblem;
