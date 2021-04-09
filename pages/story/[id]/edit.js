import React from "react";
import { Form, message, PageHeader } from "antd";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { useAuth } from "../../../hooks/userHooks";
import { getUserCharacters } from "../../../redux/actions/charactersActions";
import {
  getStory,
  editStory,
  deleteStory,
} from "../../../redux/actions/storiesActions";

import StoryForm from "../../../components/forms/StoryForm";
import LoadingScreen from "../../../components/hoc/LoadingScreen";
import RedirectComp from "../../../components/hoc/RedirectComp";

const EditStory = (props) => {
  const auth = useAuth();
  const router = useRouter();
  const {
    story,
    loading,
    characters,
    loadingStory,
    storyExists,
    deleted,
    confirmMessage,
  } = props;
  const [form] = Form.useForm();

  const [mature, setMature] = React.useState(false);
  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
    }
  }, [auth]);

  React.useEffect(() => {
    if (router.query.id) {
      props.getStory(router.query.id);
    }
  }, [router.query.id]);

  React.useEffect(() => {
    if (deleted) {
      router.push("/profile");
    }
  }, [deleted]);

  React.useEffect(() => {
    if (confirmMessage) {
      message.success(confirmMessage);
    }
  }, [confirmMessage]);

  const submit = (values) => {
    delete values.currentChar;
    props.editStory(values, router.query.id);
  };

  return (
    <LoadingScreen loading={loading}>
      <RedirectComp type={"404"} condition={storyExists}>
        <RedirectComp
          type="403"
          condition={auth.user && auth.user.uid === story.authorId}
        >
          <div className="new-story custom-form">
            <div className="inner">
              <PageHeader
                className="site-page-header"
                onBack={() => router.push(`/story/${router.query.id}`)}
                title="Back to story"
              />
              <h2 className="side-heading">Edit story: {story.title}</h2>
              <StoryForm
                type="edit"
                submit={submit}
                characters={characters}
                loading={loading}
                form={form}
                mature={mature}
                setMature={setMature}
                visibility={visibility}
                setVisibility={setVisibility}
                story={story}
                loadingStory={loadingStory}
                deleteStory={props.deleteStory}
              />
            </div>
          </div>
        </RedirectComp>
      </RedirectComp>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters.userCharacters,
  confirmMessage: state.stories.message,
  storyId: state.stories.storyId,
  loadingStory: state.stories.loadingStory,
  story: state.stories.story,
  loading: state.stories.loading,
  storyExists: state.stories.storyExists,
  deleted: state.stories.deleted,
});

export default connect(mapStateToProps, {
  getUserCharacters,
  editStory,
  getStory,
  deleteStory,
})(EditStory);
