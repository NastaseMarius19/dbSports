import { useState } from "react";
import ModalCreateTeam from "../modals/ModalCreateTeam";

const CreateTeamButton = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function closeModalHandler() {
        setModalIsOpen(false);
    }
    function createTeamHandler() {
        setModalIsOpen(true);
    }

    return (
        <div>
            <button className="btn btn-post" onClick={createTeamHandler}>
                Create a Team
            </button>
            {modalIsOpen && <ModalCreateTeam onCancel={closeModalHandler} />}
        </div>
    );
};

export default CreateTeamButton;