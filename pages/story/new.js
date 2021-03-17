import React from "react";
import { Form } from "antd";
import { connect } from "react-redux";

import { useAuth } from "../../hooks/userHooks";
import { getUserCharacters } from "../../redux/actions/charactersActions";
import { addStory } from "../../redux/actions/storiesActions";

import StoryForm from "../../components/forms/StoryForm";
import RedirectComp from "../../components/hoc/RedirectComp";
import LoadingScreen from "../../components/hoc/LoadingScreen";

const NewStory = (props) => {
  const [form] = Form.useForm();
  const auth = useAuth();

  const [mature, setMature] = React.useState(false);
  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters();
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
      router.push(`/story/${storyId}`);
    }
  }, [props.storyId]);

  const submit = (values) => {
    delete values.currentChar;
    props.addStory({
      ...values,
      authorName: props.auth.user.username,
      banner: form.getFieldValue("banner") ? form.getFieldValue("banner") : "",
    });
  };

  return (
    <LoadingScreen loading={auth.isLoading}>
      <RedirectComp condition={auth.user} type="redirect">
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
