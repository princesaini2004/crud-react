// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Create() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [number, setNumber] = useState("");
//   const history = useNavigate();

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     axios.get(`https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test?email=${email}`)
//       .then(response => {
//         if (response.data.length > 0) {
//           history("/loginpage");
//           alert('This email already exists. Please login.');
//         } else {
//           axios.post(
//             "https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test",
//             { name, email, password, number }
//           )
//             .then((response) => {
//               history("/index", { from: "login" });
//             })
//         }
//       })
//   };

//   return (
//     <>
//       <div className="par">
//         <form className="container-sm" onSubmit={handlesubmit}>
//           <h2>Create</h2>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Email address</label>
//             <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Number</label>
//             <input type="tel" className="form-control" maxLength="10" pattern="[0-9]{10}" aria-describedby="emailHelp" onChange={(e) => setNumber(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input type="password" className="form-control" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Create;
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const history = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get('https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test');      
      const userExists = response.data.some(user => user.email === email);
      
      if (userExists) {
        alert('This email already exists. Please login.');
        history("/loginpage");
      } else {
        const createResponse = await axios.post(
          "https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test",
          { name, email, password, number }
        );
        history("/index", { state: { from: "login" } });
      }
    } catch (error) {
     alert.error('Error occurred:', error);
    }
  };
  
  return (
    <div className="par">
      <form className="container-sm" onSubmit={handlesubmit}>
        <h2>Create</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Number</label>
          <input type="tel" className="form-control" maxLength="10" pattern="[0-9]{10}" aria-describedby="emailHelp" onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Create;
