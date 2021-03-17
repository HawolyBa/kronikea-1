import React from "react";
import { Result, Button } from "antd";
import { useAuth } from "../../hooks/userHooks";

const withAuth = (WrappedComponent) => {
  const AuthRoute = (props) => {
    const auth = useAuth();
    return auth.isLoading ? (
      <div className="loader-container">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    ) : auth.user.uid ? (
      <WrappedComponent {...props} auth={auth} />
    ) : (
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  };
  return AuthRoute;
};

export default withAuth;
