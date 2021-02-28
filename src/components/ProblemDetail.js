import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProblemDetail.css";
import EditIcon from '@material-ui/icons/Edit';
import AddProblem from './AddProblem';

function ProblemDetail({ match, Problems }) {
  const [problem, setProblem] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`/api/posts/id`, {
        params: {
          id: match.params.id
        }
      })
      .then((res) => setProblem(res.data))
      .catch((err) => console.log(err));
  };

  const removeData = () => {
    axios.delete('/api/posts/delete', {
      params: {
        id: match.params.id
      }
    })
    .then(res => {
      alert('Question Deleted')
    })
    .catch(err => console.log(err))
  }
  if (!problem) return null;

  return (
    <div className="problem_detail_container">
      <div className="problem_detail_card">
        <EditIcon fontSize="large" className="problem_edit" onClick={() => setIsEdit(true)}/>
        <div className="problem_name">{problem[0].name}</div>
        <div className="problem_description">{problem[0].description}</div>
        <button className="problem_remove" onClick={removeData}>Remove</button>
      </div>
      <AddProblem isEdit={isEdit} onClose={() => setIsEdit(false)} updateName={problem[0].name} updateDescription={problem[0].description} updateDifficulty={problem[0].difficulty} updateStatus={problem[0].status} match={match} />
    </div>
  );
}

export default ProblemDetail;
