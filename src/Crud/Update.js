import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Update = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test/${id}`)
        .then(response => {
          setName(response.data.name);
          setEmail(response.data.email);
        })
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(
      `https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test/${id}`, {
      name: name,
      email: email,
    })
      .then(() => {
        navigate("/index");
      });
  };

  return (
    <>
      <div className="par">
        <form className="container-sm" onSubmit={handleSubmit}>
          <h2>Update</h2>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
          <Link to={"/index"} className='btn btn-secondary m-2'> Go back</Link>
        </form>
      </div>
    </>
  );
}

export default Update;
