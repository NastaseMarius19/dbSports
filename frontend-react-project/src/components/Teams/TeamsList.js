
import { React, useState, useContext } from "react";
import { LoginContext } from '../Context/LoginContext'

import axios from "axios";
const handleClick = () => {
  alert("I bet you joined the winning team!")
}

function TeamsList(props) {

  const { email } = useContext(LoginContext);
  const joinTeam = async (team) => {
    try {
      await axios.post(`http://localhost:8080/teams/add-user`,
        {
          name: team.name,
          email: email
        }
      ).then((res) => console.log(res))

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      {props.teams.map((team) => {
        return <button onClick={function (thing) { joinTeam(team); handleClick() }} className="btn">{team.name}</button>
      })}

    </div>
  );
}

export default TeamsList;
