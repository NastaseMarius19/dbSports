import { useState } from "react";
import Backdrop from "../modals/Backdrop";
import ModalSignout from "../modals/ModalSignout";

function UsernameButton(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  function signoutHandler() {
    setModalIsOpen(true);
  }

  return (
    <div>
      <div>
        <button 
        className="btn btn-post" 
        onClick={signoutHandler}>
          User
        </button>
      </div>
      {modalIsOpen && <ModalSignout onCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default UsernameButton;
