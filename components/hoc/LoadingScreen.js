import React from "react";

const LoadingScreen = ({ children, loading }) => {
  return !loading ? (
    children
  ) : (
    <div className="loader-container">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
