import Tournaments from "../components/tournaments/Tournaments";
import Subscriptions from "../components/subscriptions/Subscriptions";
import NavbarTournamentsPage from "../components/navbars/NavbarTournamentsPage";
import DbSports from "../components/logos/DbSports";
import { LoginContext } from "../components/Context/LoginContext";
import { React, useState, useContext } from "react";

function TournamentsPage() {
  const { email } = useContext(LoginContext);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      <NavbarTournamentsPage />

      <div className="mt-5">
        <div className="row">
          <div className="col-9 mt-1">
            <Tournaments />
          </div>
          <div className="col-3 mt-0">
            <Subscriptions />
            <h2>Email: {email} </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournamentsPage;
