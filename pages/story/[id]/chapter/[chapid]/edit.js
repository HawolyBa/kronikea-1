import React from "react";
import { connect } from "react-redux";
import { Form, message } from "antd";
import { useRouter } from "next/router";

import { useAuth } from "../../../../../hooks/userHooks";
import {
  getChapter,
  editChapter,
  getUserLocations,
} from "../../../../../redux/actions/storiesActions";
import { getUserCharacters } from "../../../../../redux/actions/charactersActions";

import ChapterForm from "../../../../../components/forms/ChapterForm";
import LoadingScreen from "../../../../../components/hoc/LoadingScreen";
import RedirectComp from "../../../../../components/hoc/RedirectComp";

const EditChapter = (props) => {
  const [form] = Form.useForm();
  const {
    characters,
    loading,
    locations,
    loadingChapter,
    chapter,
    chapterExists,
    editMessage,
  } = props;
  const auth = useAuth();
  const router = useRouter();
  const [body, setBody] = React.useState("");

  React.useEffect(() => {
    props.getChapter(router.query.id, router.query.chapid);
  }, []);

  React.useEffect(() => {
    if (editMessage) {
      message.success(editMessage);
    }
  }, [editMessage]);

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
      props.getUserLocations(auth.user.uid);
    }
  }, [auth]);

  const submit = (values) => {
    delete values.currentChar;
    delete values.currentLoc;

    props.editChapter(
      {
        ...values,
        body,
        status: values.status === "true",
      },
      router.query.id,
      router.query.chapid
    );
  };

  return (
    <LoadingScreen loading={loading}>
      <RedirectComp type="404" condition={chapterExists}>
        <RedirectComp
          type="403"
          condition={auth.user && auth.user.uid === chapter.authorId}
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
                type="edit"
                loadingChapter={loadingChapter}
                loading={loading}
                chapter={chapter}
              />
            </div>
          </div>
        </RedirectComp>
      </RedirectComp>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  chapter: state.stories.chapter,
  characters: state.characters.userCharacters,
  loading: state.stories.loading,
  locations: state.stories.userLocations,
  loadingChapter: state.stories.loadingChapter,
  chapterExists: state.stories.chapterExists,
  editMessage: state.stories.message,
});

export default connect(mapStateToProps, {
  getChapter,
  getUserCharacters,
  getUserLocations,
  editChapter,
})(EditChapter);
