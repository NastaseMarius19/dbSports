import NavbarMainPage from "../components/navbars/NavbarMainPage";
import Sportlist from "../components/sportlist/Sportlist";
import Subscriptions from "../components/subscriptions/Subscriptions";
import { React, useState } from "react";

function MainPage() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <div className="main-nav">
        <NavbarMainPage />
        <input type="search" placeholder="Search" class="search-field" onChange={inputHandler} />
      </div>
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
