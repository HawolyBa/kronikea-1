import React from "react";
import { connect } from "react-redux";
import { Form, PageHeader } from "antd";
import { useRouter } from "next/router";

import { useAuth } from "../../../../hooks/userHooks";
import {
  getStory,
  addChapter,
  getStoryLocations,
} from "../../../../redux/actions/storiesActions";
import { getUserCharacters } from "../../../../redux/actions/charactersActions";

import ChapterForm from "../../../../components/forms/ChapterForm";
import LoadingScreen from "../../../../components/hoc/LoadingScreen";
import RedirectComp from "../../../../components/hoc/RedirectComp";

const NewChapter = (props) => {
  const [form] = Form.useForm();
  const {
    characters,
    loading,
    storyExists,
    story,
    locations,
    loadingChapter,
    chapId,
  } = props;
  const auth = useAuth();
  const router = useRouter();
  const [body, setBody] = React.useState("");

  React.useEffect(() => {
    props.getStory(router.query.id);
  }, []);

  React.useEffect(() => {
    if (chapId && form.getFieldValue("status") === "true") {
      router.push(`/story/${story.id}/chapter/${chapId}`);
    }
    if (chapId && form.getFieldValue("status") === "false") {
      router.push(`/story/${story.id}/chapter/${chapId}/edit`);
    }
  }, [chapId]);

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
      props.getStoryLocations(router.query.id);
    }
  }, [auth]);

  const submit = (values) => {
    delete values.currentChar;
    delete values.currentLoc;

    props.addChapter({
      ...values,
      authorName: auth.user.username,
      userImage: auth.user.image,
      storyId: router.query.id,
      body,
      status: values.status === "true",
    });
  };

  return (
    <LoadingScreen loading={loading}>
      <RedirectComp type="404" condition={storyExists}>
        <RedirectComp
          type="403"
          condition={auth.user && auth.user.uid === story.authorId}
        >
          <div className="custom-form">
            <div className="inner">
              <PageHeader
                className="site-page-header"
                onBack={() => router.push(`/story/${router.query.id}`)}
                title="Back to story"
              />
              <h2 className="side-heading">Add a new chapter</h2>
              <ChapterForm
                submit={submit}
                form={form}
                characters={characters}
                locations={locations}
                body={body}
                setBody={setBody}
                type="add"
                loadingChapter={loadingChapter}
                loading={loading}
                chapId={chapId}
              />
            </div>
          </div>
        </RedirectComp>
      </RedirectComp>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  story: state.stories.story,
  characters: state.characters.userCharacters,
  storyExists: state.stories.storyExists,
  loading: state.stories.loading,
  locations: state.stories.storyLocations,
  chapId: state.stories.chapId,
  loadingChapter: state.stories.loadingChapter,
});

export default connect(mapStateToProps, {
  getStory,
  getUserCharacters,
  getStoryLocations,
  addChapter,
})(NewChapter);
