import React from "react";
import { Result, Button } from "antd";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/userHooks";
import { getStory } from "../../redux/actions/storiesActions";
import { getUserCharacters } from "../../redux/actions/charactersActions";

const withAuthorization = (WrappedComponent) => {
  const CheckAuthorization = (props) => {
    const auth = useAuth();
    const router = useRouter();

    React.useEffect(() => {
      props.getStory(router.query.id);
    }, []);

    React.useEffect(() => {
      if (auth.user) {
        props.getUserCharacters(auth.user.uid);
      }
    }, [auth]);

    return props.storyExists ? (
      !props.storyProps.authorId || auth.isLoading ? (
        <div className="loader-container">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : !auth.isLoading && !auth.user ? (
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<Button type="primary">Back Home</Button>}
        />
      ) : props.storyProps.authorId === auth.user.uid ? (
        <WrappedComponent auth={auth} {...props} />
      ) : (
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<Button type="primary">Back Home</Button>}
        />
      )
    ) : (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  };

  const mapStateToProps = (state) => ({
    storyProps: state.stories.story,
    characters: state.characters.userCharacters,
    storyExists: state.stories.storyExists,
  });

  return connect(mapStateToProps, { getStory, getUserCharacters })(
    CheckAuthorization
  );
};

export default withAuthorization;
