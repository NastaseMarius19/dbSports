import React from "react";
import RegisterButton from "../buttons/RegisterButton";
import LoginButton from "../buttons/LoginButton";
import Password from "antd/lib/input/Password";

const Form = () => {
  return (
    <div className="form">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
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
            <div className="buttons">
              <div className="loginButton">
                <LoginButton />
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
