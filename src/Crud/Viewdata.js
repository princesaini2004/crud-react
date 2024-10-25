import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Viewdata = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test/${id}`)
        .then(response => {
          setName(response.data.name);
          setEmail(response.data.email);
        })
    }
  }, [id]);

  return (
    <>
       <div className="par" >
        <form class="container-sm">
          <h2>View</h2>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" readOnly className="form-control" onChange={(e) => setName(e.target.value)}  value={name}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" readOnly className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <Link to={`/update/?id=${id}`} className='btn btn-success m-2'> Edit</Link>
          <Link to={"/index"} className='btn btn-secondary m-2'> Go back</Link>
        </form>
      </div>
    </>
  )
}

export default Viewdata
