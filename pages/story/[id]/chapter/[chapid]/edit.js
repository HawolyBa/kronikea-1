import React from "react";
import { connect } from "react-redux";
import { Form, message } from "antd";
import { useRouter } from "next/router";

import { useAuth } from "../../../../../hooks/userHooks";
import {
  getChapter,
  editChapter,
  getUserLocations,
  deleteChapter,
} from "../../../../../redux/actions/storiesActions";
import {
  getUserCharacters,
  getCharactersInStory,
} from "../../../../../redux/actions/charactersActions";
import { arr_diff } from "../../../../../utils/helpers";

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
    secondaryCharacters,
    mainArr,
  } = props;
  const auth = useAuth();
  const router = useRouter();
  const [body, setBody] = React.useState("");

  React.useEffect(() => {
    props.getCharactersInStory(router.query.id);
    props.getChapter(router.query.id, router.query.chapid);
  }, [router.query.id, router.query.chapid]);

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
      props.getUserLocations(auth.user.uid);
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

    if (typeof values.banner === null) values.banner = "";
    if (!values.banner) delete values.imageCopyright;

    const originArr = chapter.characters.filter((c) => !mainArr.includes(c)); // Array d'ids
    let secondaryCharactersArr = [...secondaryCharacters]; // Array d'objets contenant les perso et le nombre de fois
    let charInChapter = values.characters.filter((c) => !mainArr.includes(c)); // Array contenant les nouveaux perso moins les mains
    let newArr = arr_diff(originArr, charInChapter); // Array contenant tous les changements à traiter

    // Vérifie si le perso est nouvellement ajouté ou retiré
    newArr.forEach((char) => {
      const index = secondaryCharactersArr.findIndex((c) => c.id === char);
      // Vérifier si rajouté ou retiré
      if (!originArr.includes(char)) {
        // Char n'existe pas
        if (index === -1) {
          secondaryCharactersArr.push({ id: char, times: 1 });
        } else {
          // char existe donc on ajoute time 1
          secondaryCharactersArr[index].times =
            secondaryCharactersArr[index].times + 1;
        }
      } else {
        // char retiré donc on enlève time 1
        secondaryCharactersArr[index].times =
          secondaryCharactersArr[index].times - 1;
      }
    });
    // Retirer les objets dont le times =0
    secondaryCharactersArr = secondaryCharactersArr.filter((c) => c.times > 0);

    props.editChapter(
      {
        ...values,
        body,
        status: values.status === "true",
      },
      router.query.id,
      router.query.chapid,
      secondaryCharactersArr
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
  mainArr: state.characters.mainArr,
  secondaryCharacters: state.characters.secondaryCharacters,
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
  getCharactersInStory,
  deleteChapter,
})(EditChapter);
