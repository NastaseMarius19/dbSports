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
        Return to main page
      </button>
    </div>
  );
};

export default ReturnToMainPageButton;