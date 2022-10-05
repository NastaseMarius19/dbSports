import React from "react";
import PostButton from "../buttons/PostButton";
import UsernameButton from "../buttons/UsernameButton";
import DbSports from "../logos/DbSports";
import SwitchPageButton from "../buttons/SwitchPageButton";
// import LogoButton from "../buttons/LogoButton";


const NavbarMainPage = () => {

  return (
    <nav>
      <div className="dbsportsNav">
        <div className="dbsportsNav-content">
          <div class="container">
            {/* <form action="/" method="GET" class="form"> 
          Return to make searchbar functional!!!*/}

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
              <SwitchPageButton navigation="/tournaments" text="Tournaments" />
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

export default NavbarMainPage;
