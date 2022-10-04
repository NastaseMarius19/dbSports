import React from "react";
import SubmitRegisterButton from "../buttons/SubmitRegisterButton";
import BackToLoginButton from "../buttons/BackToLoginButton";

const RegisterForm = () => {
  return (
    <div className="form">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group1">
              <label className="nameInput">Email address:</label>
              <input
                type="email"
                placeholder="Enter email"
                className="formInput"
              />
            </div>
            <div className="form-group1">
              <label className="passwordInput">Password:</label>
              <input
                type="password"
                placeholder="Enter password"
                className="formInput"
              />
            </div>
            <div className="form-group1">
              <label className="passwordInput">Repeat Password:</label>
              <input
                type="password"
                placeholder="Repeat password"
                className="formInput"
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
