import React from "react";

const withLoading = (WrappedComponent) => {
  const LoadingScreen = (props) => {
    const [isLoading, setLoading] = React.useState(true);
    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && (
          <div className="loader-container">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  };
  return LoadingScreen;
};

export default withLoading;
