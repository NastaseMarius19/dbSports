import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

const SignoutButton = () => {
  const navigate = useNavigate();
  const { setEmail } = useContext(LoginContext);

  return (
    <div>
      <button
        onClick={() => {
          setEmail("");
          navigate("/");
        }}
        className="btn btn-post"
      >
        Sign out
      </button>
    </div>
  );
};

export default SignoutButton;
