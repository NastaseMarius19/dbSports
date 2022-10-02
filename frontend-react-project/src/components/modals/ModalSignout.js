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
        <button className="btn btn-alt" onClick={cancelHandler}>
          Cancel
        </button>
        <SignoutButton />
      </div>
    </div>
  );
}

export default ModalSignout;
