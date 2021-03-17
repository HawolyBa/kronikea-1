import React from "react";
import { useRouter } from "next/router";

import { useAuth } from "../../hooks/userHooks";

const withRedirectAuth = (WrappedComponent) => {
  const CheckAuth = (props) => {
    const auth = useAuth();
    const router = useRouter();
    return auth.isLoading ? (
      <div className="loader-container">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    ) : auth.user.uid ? (
      <WrappedComponent auth={auth} {...props} />
    ) : (
      router.push("/auth")
    );
  };
  return CheckAuth;
};

export default withRedirectAuth;
