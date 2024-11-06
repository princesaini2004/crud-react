import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://671b294cacf9aa94f6acbe93.mockapi.io/crud-test?email=${email}`);

      if (response.data.length === 0) {
        setIsRegistered(false);
        navigate("/");  
      } else if (response.data.length > 0) {
        const user = response.data[0];
       
        if (user.password === password) {
          setIsRegistered(true);
       
          navigate("/index", { state: { from: "loginpage", userData: user } });
        } else {
          alert("Invalid password. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error checking user registration", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
