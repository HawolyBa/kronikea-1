import React from "react";
import { Form, Result, Button } from "antd";
import { connect } from "react-redux";
import { useRouter } from "next/router";

import { useAuth } from "../../../hooks/userHooks";
import { getUserCharacters } from "../../../redux/actions/charactersActions";
import { getStory, editStory } from "../../../redux/actions/storiesActions";

//import Loader from "../../../components/hoc/withLoading";
import StoryForm from "../../../components/forms/StoryForm";

const EditStory = (props) => {
  const auth = useAuth();
  const router = useRouter();
  const { story, loading, characters, loadingStory, storyExists } = props;
  const [form] = Form.useForm();

  console.log(loading);

  const [mature, setMature] = React.useState(false);
  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters();
    }
  }, [auth]);

  React.useEffect(() => {
    if (router.query.id) {
      props.getStory(router.query.id);
    }
  }, [router.query.id]);

  const submit = (values) => {
    delete values.currentChar;
    props.editStory(values, router.query.id);
  };

  return !loading ? (
    storyExists && story.title ? (
      auth.user.uid === story.authorId ? (
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
        />
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
    )
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

const mapStateToProps = (state) => ({
  characters: state.characters.userCharacters,
  confirmMessage: state.stories.message,
  storyId: state.stories.storyId,
  loadingStory: state.stories.loadingStory,
  story: state.stories.story,
  loading: state.stories.loading,
  storyExists: state.stories.storyExists,
});

export default connect(mapStateToProps, {
  getUserCharacters,
  editStory,
  getStory,
})(EditStory);
