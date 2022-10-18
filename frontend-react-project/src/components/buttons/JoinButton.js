import { useState } from "react";
import Backdrop from "../modals/Backdrop";
import ModalJoin from "../modals/ModalJoin";

function JoinButton(props) {
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
          Join
        </button>
      </div>
      {modalIsOpen && <ModalJoin onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default JoinButton;
