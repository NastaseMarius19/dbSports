import React from "react";
import { useNavigate } from "react-router-dom";
const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/mainpage")} className="btn btn-login">Login</button>
    </div>
  );
};

export default LoginButton;
