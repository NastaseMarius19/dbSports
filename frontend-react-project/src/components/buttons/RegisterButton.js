import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/register")}
        className="btn btn-register"
      >
        Register
      </button>
    </div>
  );
};

export default RegisterButton;
