import React, { useState, useContext } from "react";
import RegisterButton from "../buttons/RegisterButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

const Form = () => {
  const context = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios
        .post("http://localhost:8080/users/login", {
          email: email,
          password: password,
        })
        .then((res) => context.setName(res.data.name));
      navigate("/mainpage");
      context.setEmail(email);
      setEmail("");
      setPassword("");
    } catch (err) {
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
                value={email}
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
                <button className="btn btn-post" type="submit">
                  Login
                </button>
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
