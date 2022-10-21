function CodeSubmitButton(props) {
  return (
    <div>
      <button className="btn btn-post" onClick={props.onClick}>
        Submit
      </button>
    </div>
  );
}

export default CodeSubmitButton;
