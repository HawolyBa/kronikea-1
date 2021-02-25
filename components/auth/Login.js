import React from "react";

const Login = ({
  email,
  password,
  handleClick,
  setPassword,
  setEmail,
  signin,
}) => {
  return (
    <div className="inner-auth">
      <h2>Welcome back to Kronikea</h2>
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
        <div className="login-btn custom-btn" onClick={signin}>
          <span>Login</span>
        </div>
      </form>
      <p onClick={handleClick}>Don't have an account yet ? Register here</p>
    </div>
  );
};

export default Login;
