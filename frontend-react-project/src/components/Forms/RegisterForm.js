import axios from "axios";
import React from "react";
import SubmitRegisterButton from "../buttons/SubmitRegisterButton";
import { useState } from "react";
import BackToLoginButton from "../buttons/BackToLoginButton";

const RegisterForm = () => {
  const [firstname, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [repeatpassword, setRepeatPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/users/register", {
        name: firstname,
        surname: lastname,
        email: email,
        password: password,

        //repeatpassword: repeatpassword
      });
      setName("");
      setLastName("");
      setEmail("");
      setPassword("");
      //setRepeatPassword('');
    } catch (err) {
      alert("Registration failed");
    }
  }

  return (
    <div className="rform">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group1">
              <label className="nameInput">First Name:</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="formInput"
                required
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="form-group1">
              <label className="nameInput">Last Name:</label>
              <input
                type="text"
                placeholder="Enter your Last Name"
                className="formInput"
                required
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
            <div className="form-group1">
              <label className="nameInput">Email address:</label>
              <input
                type="email"
                placeholder="Enter email"
                className="formInput"
                required
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
                required
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="form-group1">
              <label className="passwordInput">Repeat Password:</label>
              <input
                type="password"
                placeholder="Repeat password"
                className="formInput"
                required
                // onChange={(event) => {
                //   setRepeatPassword(event.target.value);
                // }}
              />
            </div>
            <div className="buttons">
              <div className="loginButton">
                <SubmitRegisterButton />
              </div>

              <div className="loginButton">
                <BackToLoginButton />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
