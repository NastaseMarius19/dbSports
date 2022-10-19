import TeamsList from "../Teams/TeamsList";

const ModalJoinATeam = (props) => {
  function cancelHandler() {
    props.onCancel();
  }
  
  return (
    <div className="modal2">
      <div>
        <TeamsList />
      </div>
      <div className="modalButtons">
        <button className="btn btn-post" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalJoinATeam;
