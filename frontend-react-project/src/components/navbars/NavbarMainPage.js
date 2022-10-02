import React from "react";
import PostButton from "../buttons/PostButton";
import UsernameButton from "../buttons/UsernameButton";
import Logo from "../logos/Logo";

const NavbarMainPage = () => {
  return (
    <nav>
      <div className="dbsportsNav">
        <div class="container">
          {/* <form action="/" method="GET" class="form"> 
          Return to make searchbar functional!!!*/}
          <input type="search" placeholder="Search" class="search-field" />
          <button type="submit" class="search-button">
            <img
              src="https://wiki.geogebra.org/uploads/thumb/8/88/Menu-button-open-search.svg/480px-Menu-button-open-search.svg.png"
              alt="mglass"
            />
          </button>
          {/* </form> */}
        </div>
        <div className="main-page-buttons">
        <div>
          <PostButton />
        </div>
        <div>
          <UsernameButton />
        </div>
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
