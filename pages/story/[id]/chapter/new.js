import React from "react";
import { connect } from "react-redux";
import { Form } from "antd";
import { useRouter } from "next/router";

import { useAuth } from "../../../../hooks/userHooks";
import {
  getStory,
  addChapter,
  getUserLocations,
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
      props.getUserLocations(auth.user.uid);
    }
  }, [auth]);

  const submit = (values) => {
    delete values.currentChar;
    delete values.currentLoc;

    const main = story.mainArr;
    let secondaryCharacters = [...story.secondaryArr];
    let charInChapter = values.characters.filter((c) => !main.includes(c));

    charInChapter.forEach((char) => {
      const index = secondaryCharacters.findIndex((c) => c.id === char);
      if (index !== -1) {
        secondaryCharacters[index].times++;
      } else {
        secondaryCharacters.push({ id: char, times: 1 });
      }
    });

    props.addChapter(
      {
        ...values,
        authorName: auth.user.username,
        storyId: story.id,
        body,
        status: values.status === "true",
      },
      secondaryCharacters
    );
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
  locations: state.stories.userLocations,
  chapId: state.stories.chapId,
  loadingChapter: state.stories.loadingChapter,
});

export default connect(mapStateToProps, {
  getStory,
  getUserCharacters,
  getUserLocations,
  addChapter,
})(NewChapter);
