import React from "react";
import { connect } from "react-redux";
import { Form, message } from "antd";
import { useRouter } from "next/router";

import {
  getLocation,
  editLocation,
  getUserStories,
  deleteLocation,
} from "../../../redux/actions/storiesActions";
import { useAuth } from "../../../hooks/userHooks";

import LocationForm from "../../../components/forms/LocationForm";
import RedirectComp from "../../../components/hoc/RedirectComp";
import LoadingScreen from "../../../components/hoc/LoadingScreen";

const EditLocation = (props) => {
  const {
    stories,
    loadingLoc,
    actionMessage,
    location,
    loading,
    locationExists,
    deleted,
  } = props;
  const [form] = Form.useForm();
  const auth = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (auth.user) {
      props.getUserStories();
    }
  }, [auth]);

  React.useEffect(() => {
    if (deleted) {
      router.push("/profile");
    }
  }, [deleted]);

  React.useEffect(() => {
    props.getLocation(router.query.id);
  }, [router.query.id]);

  React.useEffect(() => {
    if (actionMessage) {
      message.success(actionMessage);
    }
  }, [actionMessage]);

  const submit = (values) => {
    props.editLocation(values);
  };

  return (
    <LoadingScreen loading={loading}>
      <RedirectComp type="404" condition={locationExists}>
        <RedirectComp
          type="403"
          condition={auth.user && auth.user.uid === location.authorId}
        >
          <div className="new-location custom-form">
            <div className="inner">
              <h2 className="side-heading">Edit location: {location.name}</h2>
              <LocationForm
                form={form}
                location={location}
                stories={stories}
                type="edit"
                loadingLoc={loadingLoc}
                submit={submit}
                deleteLocation={props.deleteLocation}
                initialValues={{
                  name: location.name,
                  storyId: location.storyId,
                  description: location.description,
                  image: location.image,
                  imageCopyright: location.imageCopyright,
                }}
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
  location: state.stories.location,
  loading: state.stories.loading,
  actionMessage: state.stories.message,
  loadingLoc: state.stories.loadingLoc,
  locationExists: state.stories.locationExists,
  deleted: state.stories.deleted,
});

export default connect(mapStateToProps, {
  getLocation,
  editLocation,
  getUserStories,
  deleteLocation,
})(EditLocation);
