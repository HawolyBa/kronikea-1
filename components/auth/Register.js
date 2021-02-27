import React from "react";

const Register = ({
  email,
  password,
  confirmPassword,
  username,
  setEmail,
  setUsername,
  setPassword,
  setConfirmPassword,
  handleClick,
  signup,
}) => {
  return (
    <div className="inner-auth">
      <h2>Welcome to Kronikea</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <div className="input-group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-input"
              type="email"
              id="email"
            />
            <div className="input-group__icon">
              <ion-icon name="mail"></ion-icon>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <div className="input-group">
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="form-input"
              type="text"
              id="username"
            />
            <div className="input-group__icon">
              <ion-icon name="person"></ion-icon>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-input"
              type="password"
              id="password"
            />
            <div className="input-group__icon">
              <ion-icon name="key"></ion-icon>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="input-group">
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className="form-input"
              type="password"
              id="confirm-password"
            />
            <div className="input-group__icon">
              <ion-icon name="key"></ion-icon>
            </div>
          </div>
        </div>
        <div className="login-btn custom-btn" onClick={signup}>
          <span>Create account</span>
        </div>
      </form>
      <p onClick={handleClick}>Already have an account ? Login here</p>
    </div>
  );
};

export default Register;
