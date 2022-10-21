import { useState } from "react";
import Backdrop from "../modals/Backdrop";
import ModalJoinATeam from "../modals/ModalJoinATeam";
const JoinTeamButton = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  function joinHandler() {
    setModalIsOpen(true);
  }
  return (
    <div>
      <div>
        <button className="btn btn-post" onClick={joinHandler}>
          Join a Team
        </button>
      </div>
      {modalIsOpen && <ModalJoinATeam onCancel={closeModalHandler} />}
    </div>
  );
};

export default JoinTeamButton;
