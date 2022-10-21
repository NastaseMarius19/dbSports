import TeamsList from "../Teams/TeamsList";
import React from "react";
import axios from "axios";
const ModalJoinATeam = (props) => {
  const [teams,setTeams ] = React.useState([])

  function cancelHandler() {
    props.onCancel();
  }

  const getData = async () => {
    try {
      await axios.get(`http://localhost:8080/teams/get-teams` ,{
      }).then((res)=>setTeams(res.data))

    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(()=>{
    getData()
  },[])
  
  return (
    <div className="modal2">
      <div>
        <TeamsList teams={teams} />
      </div>
      <div className="modalButtons">
        <button className="btn btn-post" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalJoinATeam;
