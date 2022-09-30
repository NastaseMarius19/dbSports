import React from "react";
import PostButton from "../buttons/PostButton";
import UsernameButton from "../buttons/UsernameButton";
import Logo from "../logos/Logo";

const NavbarMainPage = () => {
  return (
    <nav>
      <div className="dbsportsNav">
        <div>
          <PostButton />
        </div>
        <div className="searchbar2">
          <img src="https://wiki.geogebra.org/uploads/thumb/8/88/Menu-button-open-search.svg/480px-Menu-button-open-search.svg.png" 
          className="search-img"/>
          <input placeholder="Search for anything" className="searchbar" />
        </div>
        <div>
          <UsernameButton />
        </div>
        <div className="logo">
          <Logo />
          <span>DB Sports</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMainPage;
