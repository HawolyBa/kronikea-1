import React from "react";
import { connect } from "react-redux";
import { Form, message } from "antd";
import { useRouter } from "next/router";

import {
  addLocation,
  getUserStories,
} from "../../redux/actions/storiesActions";
import { useAuth } from "../../hooks/userHooks";

import LocationForm from "../../components/forms/LocationForm";
import RedirectComp from "../../components/hoc/RedirectComp";
import LoadingScreen from "../../components/hoc/LoadingScreen";

const newLocation = (props) => {
  const { stories, loadingLoc, actionMessage, locId } = props;
  const [form] = Form.useForm();
  const auth = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (auth.user) {
      props.getUserStories();
    }
  }, [auth]);

  React.useEffect(() => {
    if (actionMessage) {
      message.success(actionMessage);
    }
  }, [actionMessage]);

  React.useEffect(() => {
    if (locId) {
      router.push(`/location/${locId}/edit`);
    }
  }, [locId]);

  const submit = (values) => {
    props.addLocation({
      ...values,
      authorId: auth.user.uid,
      authorName: auth.user.username,
      storyTitle: stories.find((s) => s.id === values.storyId).title,
    });
  };

  return (
    <LoadingScreen loading={auth.isLoading}>
      <RedirectComp type="redirect" condition={auth.user}>
        <RedirectComp
          type="verify"
          verifyEmail={auth.verifyEmail}
          condition={auth.user && auth.user.emailVerified}
        >
          <div className="new-location custom-form">
            <div className="inner">
              <h2 className="side-heading">Add a new location</h2>
              <LocationForm
                form={form}
                stories={stories}
                type="add"
                loadingLoc={loadingLoc}
                submit={submit}
                locId={locId}
                initialValues={{ name: "", description: "", image: "" }}
              />
            </div>
          </div>
        </RedirectComp>
      </RedirectComp>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  stories: state.stories.userStories,
  locId: state.stories.locId,
  actionMessage: state.stories.message,
  loadingLoc: state.stories.loadingLoc,
});

export default connect(mapStateToProps, { addLocation, getUserStories })(
  newLocation
);
