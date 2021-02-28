import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './ProblemDetail.css'

function ProblemDetail({match, Problems}) {

  const [problem, setProblem] = useState(null);

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
   await axios.get(`/api/posts/id`, {
       params: {
         id: match.params.id
       }
     })
    .then(res => setProblem(res.data))
    .catch(err => console.log(err))
  }
  if (!problem) return null;
  return (
    <div onClick={fetchData}>
      <div className="problem_name">
        {problem[0].name}
      </div>
      <div className="problem_description">
        {problem[0].description}
      </div>
    </div>
  )
}

export default ProblemDetail
