import React from "react";
import { useState } from "react";
import SubscriptionsButton from "../buttons/SubscriptionsButton";

function Subscriptions() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="card mt-5 subs2">
      <div className="card-body">
        <div className="card-title"><h2>Subscriptions</h2></div>
        <div className="sport-div">
          <SubscriptionsButton text="#football" />
        </div>
        <div className="sport-div">
          <SubscriptionsButton text="#table tennis" />
        </div>
        <div className="sport-div">
          <SubscriptionsButton text="#badminton" />
        </div>
        <div className="sport-div">
          <SubscriptionsButton text="#basketball" />
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
