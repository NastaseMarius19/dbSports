import NavbarMainPage from "../components/navbars/NavbarMainPage";
import Sportlist from "../components/sportlist/Sportlist";
import Subscriptions from "../components/subscriptions/Subscriptions";
import { React, useState, useContext } from "react";
import DbSports from "../components/logos/DbSports";
import PostButton from "../components/buttons/PostButton";
import UsernameButton from "../components/buttons/UsernameButton";
import SwitchPageButton from "../components/buttons/SwitchPageButton";
import LogoButton from "../components/buttons/LogoButton";
import { LoginContext } from "../components/Context/LoginContext";


function MainPage() {
  const { email } = useContext(LoginContext);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 fixed-top p-3">
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navLinks"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <div class="container">
            <input type="search" placeholder="Search" class="search-field" onChange={inputHandler} />
            <button type="submit" class="search-button">
              <img
                src="https://wiki.geogebra.org/uploads/thumb/8/88/Menu-button-open-search.svg/480px-Menu-button-open-search.svg.png"
                alt="mglass"
              />
            </button>
            {/* </form> */}
          </div>
          <div className="ml-3">
            <PostButton />
          </div>
          <div className="ml-3">
            <SwitchPageButton navigation="/tournaments" text="Tournaments" />
          </div>
          <div className="ml-3">
            <UsernameButton />
          </div>
          <div className="logo ml-3">
            <LogoButton />
          </div>
        </div>
      </nav>

      <div className="mt-5">
        <div className="row">
          <div className="col-9 mt-1">
            <Sportlist input={inputText} />
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

export default MainPage;
