import React from "react";

const Register = ({ handleClick }) => {
  return (
    <div className="inner-auth">
      <h2>Welcome to Kronikea</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <div className="input-group">
            <input className="form-input" type="email" id="email" />
            <div className="input-group__icon">
              <ion-icon name="mail"></ion-icon>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <div className="input-group">
            <input className="form-input" type="text" id="username" />
            <div className="input-group__icon">
              <ion-icon name="person"></ion-icon>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <input className="form-input" type="password" id="password" />
            <div className="input-group__icon">
              <ion-icon name="key"></ion-icon>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="input-group">
            <input
              className="form-input"
              type="password"
              id="confirm-password"
            />
            <div className="input-group__icon">
              <ion-icon name="key"></ion-icon>
            </div>
          </div>
        </div>
        <div className="login-btn custom-btn">
          <span>Create account</span>
        </div>
      </form>
      <p onClick={handleClick}>Already have an account ? Login here</p>
    </div>
  );
};

export default Register;
