import React, { useState, useContext } from "react";
import { LoginContext } from "./Context/LoginContext";
import RegisterButton from "../buttons/RegisterButton";
import LoginButton from "../buttons/LoginButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Form = () => {
  const {setEmail, setShowProfile} = useContext(LoginContext);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
  async function handleSubmit(event){
    event.preventDefault();
    
    try {
      await axios.post("http://localhost:8080/users/login",
        {
          //email:email,
          password:password,
        });
        navigate("/mainpage");
        setEmail('');
        setPassword('');
    }
    catch(err){
      console.log(err);
    }
    
  }

  return (
    <div className="form">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group1">
              <label className="nameInput">Email address:</label>
              <input
                type="email"
                placeholder="Enter email"
                className="formInput"
                //value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group1">
              <label className="passwordInput">Password:</label>
              <input
                type="password"
                placeholder="Enter password"
                className="formInput"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="buttons">
              <div className="loginButton">
                <button type="submit" onClick={() => {setShowProfile(true)}}>Submit</button>
              </div>
              <p>Don't have an account? Register here!</p>
              <div className="loginButton">
                <RegisterButton />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};



export default Form;

