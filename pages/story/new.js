import React from "react";
import { Form, message } from "antd";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { useAuth } from "../../hooks/userHooks";
import { getUserCharacters } from "../../redux/actions/charactersActions";
import { addStory } from "../../redux/actions/storiesActions";

import StoryForm from "../../components/forms/StoryForm";
import RedirectComp from "../../components/hoc/RedirectComp";
import LoadingScreen from "../../components/hoc/LoadingScreen";

const NewStory = (props) => {
  const [form] = Form.useForm();
  const auth = useAuth();
  const router = useRouter();

  const [mature, setMature] = React.useState(false);
  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
    }
  }, [auth]);

  React.useEffect(() => {
    form.setFieldsValue({ mature });
  }, [mature]);

  React.useEffect(() => {
    form.setFieldsValue({ public: visibility });
  }, [visibility]);

  React.useEffect(() => {
    if (props.storyId) {
      router.push(`/story/${props.storyId}`);
    }
  }, [props.storyId]);

  React.useEffect(() => {
    if (props.confirmMessage) {
      message.success(props.confirmMessage);
    }
  }, [props.confirmMessage]);

  const submit = (values) => {
    delete values.currentChar;
    if (typeof values.banner === null) values.banner = "";
    if (!values.banner) delete values.imageCopyright;

    props.addStory({
      ...values,
      authorName: auth.user.username,
      banner: form.getFieldValue("banner") ? form.getFieldValue("banner") : "",
    });
  };

  return (
    <LoadingScreen loading={auth.isLoading}>
      <RedirectComp condition={auth.user} type="redirect">
        <div className="new-story custom-form">
          <div className="inner">
            <h2 className="side-heading">Add a new story</h2>
            <StoryForm
              type="add"
              submit={submit}
              characters={props.characters}
              loading={props.loading}
              storyId={props.storyId}
              form={form}
              mature={mature}
              setMature={setMature}
              visibility={visibility}
              setVisibility={setVisibility}
            />
          </div>
        </div>
      </RedirectComp>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters.userCharacters,
  confirmMessage: state.stories.message,
  storyId: state.stories.storyId,
  loading: state.stories.loadingStory,
});

export default connect(mapStateToProps, { getUserCharacters, addStory })(
  NewStory
);
