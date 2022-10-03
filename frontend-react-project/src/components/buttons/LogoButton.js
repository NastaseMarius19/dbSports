import React from 'react'
import { useNavigate } from "react-router-dom";

const LogoButton = () => {
  const navigate = useNavigate();
  return (
    <div>
       
        <button><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Deutsche_Bank_logo_without_wordmark.svg/1024px-Deutsche_Bank_logo_without_wordmark.svg.png" 
        alt="my image" 
        onClick={() => navigate("/mainpage")} />
        </button>

    </div>
  )
}

export default LogoButton