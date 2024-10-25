import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };
  const handlesubmit = (e) => {
    e.preventDefault(); 
    axios.post(
      "https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test", {
      name: name,
      email: email,
      header
    })
    .then(() => {
        history("/index");
      });
  };
  
  return (
    <>
      <div className="par" >
        <form class="container-sm">
          <h2>create</h2>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Create
