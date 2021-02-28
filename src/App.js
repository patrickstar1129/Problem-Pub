import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import AddProblem from "./components/AddProblem.js";
import ProblemList from "./components/ProblemList.js";
import ProblemDetail from "./components/ProblemDetail.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [Problems, setProblems] = useState([]);


  useEffect(() => {
    (async () =>
      await axios
        .get("/api/posts")
        .then((res) => setProblems(res.data))
        .catch((err) => console.log(err)))();
  }, []);


  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [difficulty, setDifficulty] = useState("Easy");
  // const [status, setStatus] = useState("Incomplete");


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //   .post("/api/posts", {
  //     name: name,
  //     description: description,
  //     difficulty: difficulty,
  //     status: status,
  //   })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
  // };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header setOpen={setIsOpen} />

        <AddProblem open={isOpen} onClose={() => setIsOpen(false)} />

        <Switch>
          <Route path="/" exact>
            <ProblemList Problems={Problems} />
          </Route>

          <Route path="/problems/:id" component={ProblemDetail}/>
          <ProblemDetail Problems={Problems}/>
          <Route />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
