import React from "react";
import {LoginContext} from '../Context/LoginContext'
import axios from "axios";

function ModalJoin(props) {
    const [typeOfSport, setTypeOfSport] = React.useState("")
    const [teamName, setTeamName] = React.useState("") 
    
    const { email } = React.useContext(LoginContext);
    function cancelHandler() {
        props.onCancel();
    }
    const createTeam = async() => {
        try {
            await axios.post(`http://localhost:8080/teams/add-team` ,
            {
                name:teamName,
                typeOfSport:typeOfSport,
                usersEmails:[email]
            }
            ).then((res)=>console.log(res))

            } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="modal2">
            <div className="modalButtons">
                <div style={{"padding":"50px"}}>
                    <input
                        placeholder="Team name"
                        className="formInput form-create"
                        onChange = {(e)=> setTeamName(e.target.value)}
                        value={teamName}
                    />
                    <input
                        placeholder="Type of sport"
                        className="formInput form-create"
                        onChange = {(e)=> setTypeOfSport(e.target.value)}
                        value={typeOfSport}
                    />
                    <button className="btn btn-post btn-create" onClick={createTeam}>
                        Create
                    </button>
                    <button className="btn btn-post btn-create" onClick={cancelHandler}>
                        Go back
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ModalJoin;
