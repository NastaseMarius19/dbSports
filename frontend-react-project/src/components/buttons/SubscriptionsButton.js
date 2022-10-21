import { propNames } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

function SubscriptionsButton(props) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="row">
        <div className="col-7 pb-3">
          <button className="btn button-danger">{props.text}</button>
        </div>
        <div className="col-4">
          <button onClick={handleClick} className="btn">
            {active ? "Joined" : "Join"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionsButton;
