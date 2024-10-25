import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Indexpage() {
  const [data, setData] = useState([]);
  const getdata = () => {
    axios.get("https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test")
      .then(response => {
        setData(response.data);
        console.log(response.data);
      });
  };
  const handledelete = (id) => {
    axios.delete(`https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test/${id}`
    ).then(() => {
      getdata();
    });
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between my-4 align-text-center container-xxl">
        <h2>Read Operation</h2>
        <Link to="/" className="btn btn-secondary m-3">Create</Link>
      </div>
      <table class="table p-3">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {
          data.map((alldata) => {
            return (

              <tbody key={alldata.id}>
                <tr>
                  <th scope="row">{alldata.id}</th>
                  <td>{alldata.name}</td>
                  <td>{alldata.email}</td>
                  <td>  <Link to={`/view/?id=${alldata.id}`}><button className='btn btn-info mx-3'>View</button></Link><Link to={`/update/?id=${alldata.id}`}><button className='btn btn-success'>Edit</button></Link></td>
                  <td><button className='btn btn-danger' onClick={() => handledelete(alldata.id)}>Delete</button></td>
                </tr>
              </tbody>

            );
          })
        }


      </table>
    </>
  )
}

export default Indexpage
