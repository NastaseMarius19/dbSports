import React from "react";
// import PostButton from "../buttons/PostButton";
import UsernameButton from "../buttons/UsernameButton";
import DbSports from "../logos/DbSports";
import SwitchPageButton from "../buttons/SwitchPageButton";

const NavbarTournamentsPage = () => {
  return (
    <nav>
      <div className="dbsportsNav">
      <div className="dbsportsNav-content">
        <div class="container">
          <input type="search" placeholder="Search" class="search-field" />
          <button type="submit" class="search-button">
            <img
              src="https://wiki.geogebra.org/uploads/thumb/8/88/Menu-button-open-search.svg/480px-Menu-button-open-search.svg.png"
              alt="mglass"
            />
          </button>
        </div>
        <div className="main-page-buttons">
          <div>
            <SwitchPageButton text="Announcements" navigation="/mainpage" />
          </div>
          <div>
            <UsernameButton />
          </div>
        </div>
        </div>
        <div className="logo">
          <DbSports />
        </div>
      </div>
    </nav>
  );
};

export default NavbarTournamentsPage;
