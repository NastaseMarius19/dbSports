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
      <nav>
        <div className="dbsportsNav">
          <div className="dbsportsNav-content">
            <div class="container">
              <input
                type="search"
                placeholder="Search"
                class="search-field"
                onChange={inputHandler}
              />
              <button type="submit" class="search-button">
                <img
                  src="https://wiki.geogebra.org/uploads/thumb/8/88/Menu-button-open-search.svg/480px-Menu-button-open-search.svg.png"
                  alt="mglass"
                />
              </button>
            </div>
            <div className="main-nav">
              <NavbarMainPage />
            </div>
          </div>
          <div className="logo">
            <DbSports />
          </div>
        </div>
      </nav>
      <h2>Email: {email} </h2>
      <div className="main-comp">
        {/* <div className="main-list"> */}
        <Sportlist input={inputText} />
        {/* </div> */}
        {/* <div className="main-subscriptions"> */}
        <Subscriptions />
        {/* </div> */}
      </div>
    </div>
  );
}

export default MainPage;
