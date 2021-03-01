import React, { useState } from "react";
import axios from "axios";
import "./AddProblem.css";
import ReactDOM from "react-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function AddProblem({
  open,
  onClose,
  isEdit,
  updateName,
  updateDescription,
  updateDifficulty,
  updateStatus,
  match,
  setProblems,
  Problems,
  setProblem,
  setTemp,
}) {
  const [name, setName] = useState(updateName || "");
  const [description, setDescription] = useState(updateDescription || "");
  const [difficulty, setDifficulty] = useState(updateDifficulty || "Easy");
  const [status, setStatus] = useState(updateStatus || "Incomplete");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Hey, looks like you forget to put down the name or text?");
      return;
    }
    axios
      .post("/api/posts", {
        name: name,
        description: description,
        difficulty: difficulty,
        status: status,
      })
      .then((res) => {
        setProblems((prevState) => [...prevState, res.data]);
        setTemp((prevState) => [...prevState, res.data]);
      })
      .catch((err) => console.log(err));

    onClose();
  };

  const handleUpdate = () => {
    const newData = [
      {
        id: match.params.id,
        name: name,
        description: description,
        difficulty: difficulty,
        status: status,
      },
    ];
    const newMain = findIndexAndUpdate(Problems);
    axios
      .put("/api/posts/update", {
        id: match.params.id,
        name: name,
        description: description,
        difficulty: difficulty,
        status: status,
      })
      .then((res) => {
        setProblem(newData);
        setProblems(newMain);
      })
      .catch((err) => console.log(err));
    onClose();
  };

  const findIndexAndUpdate = (array) => {
    if (!array) return;
    let index;
    for (let problem of array) {
      if (problem._id === match.params.id) {
        index = array.indexOf(problem);
      }
    }
    array[index].description = description;
    array[index].name = name;
    array[index].difficulty = difficulty;
    array[index].status = status;
    return array;
  };

  if (!open && !isEdit) return null;

  return ReactDOM.createPortal(
    <>
      <div className="add_overlay" />
      <div className="add_container">
        <HighlightOffIcon
          onClick={onClose}
          className="close_add"
          fontSize="large"
        ></HighlightOffIcon>
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
            <select
              className="add_select"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="add_component">
            Status:
            <select
              className="add_select"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option value="Incomplete">Incomplete</option>
              <option value="Almost There">Almost There</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button
            onClick={isEdit ? handleUpdate : handleSubmit}
            className="add_button"
          >
            Submit
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default AddProblem;
