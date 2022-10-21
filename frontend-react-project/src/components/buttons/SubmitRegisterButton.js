import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import ModalRegister from "../modals/ModalRegister";
import Backdrop from "../modals/Backdrop";

function SubmitRegisterButton(props) {
  const [RmodalIsOpen, setRModalIsOpen] = useState(false);

  function closeRModalHandler() {
    setRModalIsOpen(false);
  }
  function registerHandler() {
    setRModalIsOpen(true);
  }

  return (
    <div>
      <div>
        <button className="btn btn-post" onClick={registerHandler}>
          Register
        </button>
      </div>
      {RmodalIsOpen && <ModalRegister onCancel={closeRModalHandler} />}
      {RmodalIsOpen && <Backdrop onClick={closeRModalHandler} />}
    </div>
  );
}

export default SubmitRegisterButton;
