import React from "react";
import { useNavigate } from "react-router-dom";

const PostButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/postcontentpage")}
        className="btn btn-post"
      >
        Post
      </button>
    </div>
  );
};

export default PostButton;
