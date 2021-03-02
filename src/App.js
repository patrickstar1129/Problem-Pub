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
  const [temp, setTemp] = useState([]);
  const [problemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);


  // get current problems
  const indexLastPost = currentPage * problemsPerPage;
  const indexFirstPost = indexLastPost - problemsPerPage;
  const currentProblems = Problems.slice(indexFirstPost, indexLastPost);
  const totalPages = Math.ceil(Problems.length / problemsPerPage);

  const paginate = async (e) => {
    let nextPage = e.selected + 1;

    await setCurrentPage(nextPage);
  };

  useEffect(() => {
    (async () =>
      await axios
        .get("/api/posts")
        .then((res) => {
          setProblems(res.data);
          setTemp(res.data);
        })
        .catch((err) => console.log(err)))();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className="circle1" />

        <div className="circle2" />

        <div className="circle3" />

        <Header
          setOpen={setIsOpen}
          setCurrentPage={setCurrentPage}

        />

        <AddProblem
          open={isOpen}
          onClose={() => setIsOpen(false)}
          setProblems={setProblems}
          setTemp={setTemp}
        />

        <Switch>
          <Route path="/" exact>
            <ProblemList
              Problems={currentProblems}
              temp={temp}
              setTemp={setTemp}
              setProblems={setProblems}
              totalPages={totalPages}
              paginate={paginate}
            />
          </Route>

          <Route
            path="/problems/:id"
            render={(props) => (
              <ProblemDetail
                Problems={Problems}
                setProblems={setProblems}
                {...props}
                setTemp={setTemp}
                setCurrentPage={setCurrentPage}
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
