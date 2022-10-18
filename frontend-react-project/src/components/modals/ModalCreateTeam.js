
function ModalJoin(props) {
    function cancelHandler() {
        props.onCancel();
    }

    return (
        <div className="modal2">
            <div className="modalButtons">
                <div>
                    <input
                        placeholder="Enter team name"
                        className="formInput form-create"
                    />
                    <button className="btn btn-post btn-create">
                        Create
                    </button>
                    <button className="btn btn-post btn-create" onClick={cancelHandler}>
                        Go back
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ModalJoin;
