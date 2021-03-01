import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className="circle1" />

        <div className="circle2" />

        <div className="circle3" />

        <Header setOpen={setIsOpen} />

        <AddProblem
          open={isOpen}
          onClose={() => setIsOpen(false)}
          setProblems={setProblems}
        />

        <Switch>
          <Route path="/" exact>
            <ProblemList Problems={Problems} />
          </Route>

          <Route
            path="/problems/:id"
            render={(props) => (
              <ProblemDetail
                Problems={Problems}
                setProblems={setProblems}
                {...props}
              />
            )}
          />
          <Route />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
