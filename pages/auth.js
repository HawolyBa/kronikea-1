import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { connect } from "react-redux";
import { useRouter } from "next/router";

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
  const Router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (auth.user) {
      Router.back();
    }
  }, [auth.user]);

  const signin = () => auth.signin(email, password);
  const signup = () => auth.signup(email, password, username);

  return (
    <div className="authentication">
      {!auth.isLoading && !auth.user ? (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <Login
            signin={signin}
            setPassword={setPassword}
            setEmail={setEmail}
            email={email}
            password={password}
            handleClick={handleClick}
          />
          <Register
            setPassword={setPassword}
            setEmail={setEmail}
            signup={signup}
            email={email}
            password={password}
            username={username}
            setUsername={setUsername}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            handleClick={handleClick}
          />
        </ReactCardFlip>
      ) : (
        <div className="loader-container">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { log_in })(auth);
