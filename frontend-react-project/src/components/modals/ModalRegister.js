// import React from "react";
import axios from "axios";

import { useState } from "react";
import CodeSubmitButton from "../buttons/CodeSubmitButton";

function ModalRegister(props) {
  function RcancelHandler() {
    props.onCancel();
  }

  const [code, setCode] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.get(`http://localhost:8080/users/verify/` + code, {
      });
      setCode("");
    } catch (err) {
      alert("Wrong code!");
    }
  }

  return (
    <div className="modal2">
      <div className="modalButtons">
        <p>
          You will recieve an email with the confirmation code. Please introduce
          the confirmation code.
        </p>
      </div>
      <div className="modalButtons">
        <div className="form-group1">
          <label className="nameInput" >Confirmation code:</label>
          <input
            type="text"
            placeholder="Enter the code"
            className="formInput"
            onChange={(event) => {
                setCode(event.target.value);
              }}
          />
        </div>
      </div>
      <div className="modalButtons">
        <div>
          <CodeSubmitButton onClick={handleSubmit}/>
        </div>
        <div>
          <button className="btn btn-post" onClick={RcancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalRegister;
