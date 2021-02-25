import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { connect } from "react-redux";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { log_in } from "../redux/actions/userActions";
import { useAuth } from "../hooks/userHooks";

const auth = ({ log_in }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = useAuth();

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const signin = () => log_in(email, password);

  return (
    <div className="authentication">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Login
          signin={signin}
          setPassword={setPassword}
          setEmail={setEmail}
          email={email}
          password={password}
          handleClick={handleClick}
        />
        <Register handleClick={handleClick} />
      </ReactCardFlip>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { log_in })(auth);
