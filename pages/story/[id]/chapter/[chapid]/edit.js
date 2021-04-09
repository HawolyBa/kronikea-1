import React from "react";
import { connect } from "react-redux";
import { Form, message, PageHeader } from "antd";
import { useRouter } from "next/router";

import { useAuth } from "../../../../../hooks/userHooks";
import {
  getChapter,
  editChapter,
  getStoryLocations,
  deleteChapter,
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
  }, [router.query.id, router.query.chapid]);

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
      props.getStoryLocations(router.query.id);
    }
  }, [auth]);

  React.useEffect(() => {
    if (editMessage) {
      props.getChapter(router.query.id, router.query.chapid);
      message.success(editMessage);
    }
  }, [editMessage]);

  const submit = (values) => {
    delete values.currentChar;
    delete values.currentLoc;
    let status;

    if (typeof values.status === "string") {
      if (values.status === "true") status = true;
      else if (values.status === "false") status = false;
    } else {
      status = values.status;
    }

    if (typeof values.banner === null) values.banner = "";
    if (!values.banner) delete values.imageCopyright;

    props.editChapter(
      {
        ...values,
        body,
        status,
      },
      router.query.chapid
    );
  };

  const returnBtn = chapter.status
    ? `/story/${router.query.id}/chapter/${router.query.chapid}`
    : `/story/${router.query.id}`;

  const titlBtn = chapter.status ? "chapter" : `story`;

  return (
    <LoadingScreen loading={loading}>
      <RedirectComp type="404" condition={chapterExists}>
        <RedirectComp
          type="403"
          condition={auth.user && auth.user.uid === chapter.authorId}
        >
          <div className="custom-form">
            <div className="inner">
              <PageHeader
                className="site-page-header"
                onBack={() => router.push(returnBtn)}
                title={`Back to ${titlBtn}`}
              />
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
                deleteChapter={props.deleteChapter}
                storyid={router.query.id}
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
  locations: state.stories.storyLocations,
  loadingChapter: state.stories.loadingChapter,
  chapterExists: state.stories.chapterExists,
  editMessage: state.stories.message,
});

export default connect(mapStateToProps, {
  getChapter,
  getUserCharacters,
  getStoryLocations,
  editChapter,
  deleteChapter,
})(EditChapter);
