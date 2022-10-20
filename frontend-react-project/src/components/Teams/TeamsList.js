
import { React, useState, useContext } from "react";
import {LoginContext} from '../Context/LoginContext'

import axios from "axios";
function TeamsList(props) {

  const { email } = useContext(LoginContext);
  const joinTeam = async (team) => {
    try {
      await axios.post(`http://localhost:8080/teams/add-user` ,
      {
        name:team.name,
        email:email
      }
      ).then((res)=>console.log(res))

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      {props.teams.map((team)=> {
        return <button onClick={() => joinTeam(team)} className="btn">{team.name}</button>
      })}
      
    </div>
  );
}

export default TeamsList;
