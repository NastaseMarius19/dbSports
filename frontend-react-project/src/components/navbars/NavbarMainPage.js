import React from "react";
import PostButton from "../buttons/PostButton";
import UsernameButton from "../buttons/UsernameButton";
import SwitchPageButton from "../buttons/SwitchPageButton";
// import LogoButton from "../buttons/LogoButton";

const NavbarMainPage = () => {
  return (
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
  );
};

export default NavbarMainPage;
