import React from "react";
// import PostButton from "../buttons/PostButton";
import UsernameButton from "../buttons/UsernameButton";
import SwitchPageButton from "../buttons/SwitchPageButton";
import LogoButton from "../buttons/LogoButton";

const NavbarTournamentsPage = () => {
  return (

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
          <input type="search" placeholder="Search" class="search-field" />
          <button type="submit" class="search-button">
            <img
              src="https://wiki.geogebra.org/uploads/thumb/8/88/Menu-button-open-search.svg/480px-Menu-button-open-search.svg.png"
              alt="mglass"
            />
          </button>
        </div>
        <div className="ml-3">
          <SwitchPageButton text="Announcements" navigation="/mainpage" />
        </div>
        <div className="ml-3">
          <UsernameButton />
        </div>
        <div className="logo ml-3">
          <LogoButton />
        </div>
      </div>
    </nav>
  );
};

export default NavbarTournamentsPage;
