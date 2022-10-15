import React from 'react'
import DbSports from '../logos/DbSports';

function LogoButton() {
  function refreshPage(){
    window.location.reload();
}
  return (
    <div>
      <button
        type="submit"
        className="btn btn-post bg-light"
        onClick={refreshPage}
      >
        <DbSports />
      </button>
    </div>
  );
}

export default LogoButton