import React from "react";
import { useNavigate } from "react-router-dom";
const SignoutButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")} className="btn btn-alt">
        Sign out
      </button>
    </div>
  );
};

export default SignoutButton;
