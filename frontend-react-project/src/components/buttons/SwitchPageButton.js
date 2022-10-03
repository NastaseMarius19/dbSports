import React from "react";
import { useNavigate } from "react-router-dom";


const SwitchPageButton = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(props.navigation)} className="btn btn-post">{ props.text }</button>
        </div>
    );
};

export default SwitchPageButton;
