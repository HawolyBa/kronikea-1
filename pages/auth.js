import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const auth = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="authentication">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Login handleClick={handleClick} />
        <Register handleClick={handleClick} />
      </ReactCardFlip>
    </div>
  );
};

export default auth;
