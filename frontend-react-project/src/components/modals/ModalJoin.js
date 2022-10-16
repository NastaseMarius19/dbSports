import JoinTeamButton from "../buttons/JoinTeamButton";
import CreateTeamButton from "../buttons/CreateTeamButton";


function ModalJoin(props) {
    function cancelHandler() {
        props.onCancel();
    }

    return (
        <div className="modal2">
            <div className="modalButtons">
                <JoinTeamButton />
                <CreateTeamButton />
                <div>
                    <button className="btn btn-post" onClick={cancelHandler}>
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ModalJoin;
