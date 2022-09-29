import React from "react";
import { useNavigate } from "react-router-dom";

const BackToLoginButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")} className="btn btn-register">
        Back to login
      </button>
    </div>
  );
};

export default BackToLoginButton;
