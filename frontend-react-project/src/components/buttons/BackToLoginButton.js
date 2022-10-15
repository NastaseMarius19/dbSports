import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

const BackToLoginButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => {
        navigate("/")}
        } className="btn btn-post">
        Back to login
      </button>
    </div>
  );
};

export default BackToLoginButton;
