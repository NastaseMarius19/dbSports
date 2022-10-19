import SignoutButton from "./SignoutButton";

function ModalSignout(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className="modal">
      <div className="modalButtons">
        <p>Are you sure you want to sign out?</p>
      </div>
      <div className="modalButtons">
        <div>
          <button className="btn btn-post" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
        <SignoutButton />
      </div>
    </div>
  );
}

export default ModalSignout;
