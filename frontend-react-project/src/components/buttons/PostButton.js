import React from "react";
import { useNavigate } from "react-router-dom";

const PostButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/PostContentPage")} 
      className="btn btn-post">Post</button>
    </div>
  );
};

export default PostButton;
