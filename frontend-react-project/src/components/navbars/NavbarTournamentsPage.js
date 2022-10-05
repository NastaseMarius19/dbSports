import React from "react";
// import PostButton from "../buttons/PostButton";
import UsernameButton from "../buttons/UsernameButton";

import SwitchPageButton from "../buttons/SwitchPageButton";

const NavbarTournamentsPage = () => {
  return (
    <div className="main-page-buttons">
      <div>
        <SwitchPageButton text="Announcements" navigation="/mainpage" />
      </div>
      <div>
        <UsernameButton />
      </div>
    </div>
  );
};

export default NavbarTournamentsPage;
