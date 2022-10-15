import NavbarMainPage from "../components/navbars/NavbarMainPage";
import Sportlist from "../components/sportlist/Sportlist";
import Subscriptions from "../components/subscriptions/Subscriptions";
import { React, useState, useContext } from "react";
import DbSports from "../components/logos/DbSports";
import {LoginContext} from '../components/Context/LoginContext'

function MainPage() {
const {email} = useContext(LoginContext);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      <NavbarMainPage />
      <h2>Email: {email} </h2>
      <div className="mt-5">
        <div className="row">
          <div className="col-9 mt-1">
            <Sportlist />
          </div>
          <div className="col-3 mt-0">
            <Subscriptions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
