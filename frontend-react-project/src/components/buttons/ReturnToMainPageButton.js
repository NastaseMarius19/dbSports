import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnToMainPageButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/mainpage")}
        className="btn btn-register"
      >
        Register
      </button>
    </div>
  );
};

export default ReturnToMainPageButton;