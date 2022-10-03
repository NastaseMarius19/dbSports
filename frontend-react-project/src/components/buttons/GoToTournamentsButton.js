import React from "react";
import { useNavigate } from "react-router-dom";


const GoToTournamentsButton = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/tournaments")} className="btn btn-login">Tournaments</button>
        </div>
    );
};

export default GoToTournamentsButton;
