import React from "react";
import { useRouter } from "next/router";
import { Form, message, PageHeader } from "antd";
import { connect } from "react-redux";

import { useAuth } from "../../../hooks/userHooks";
import {
  editCharacter,
  getCharacter,
  getUserCharacters,
  deleteCharacter,
} from "../../../redux/actions/charactersActions";

import LoadingScreen from "../../../components/hoc/LoadingScreen";
import RedirectComp from "../../../components/hoc/RedirectComp";
import CharacterForm from "../../../components/forms/CharacterForm";

const EditCharacter = (props) => {
  const {
    character,
    characters,
    loadingCharacter,
    loading,
    charaExists,
    editMessage,
    deleted,
  } = props;
  const auth = useAuth();
  const [form] = Form.useForm();
  const router = useRouter();

  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    if (auth.user) {
      props.getCharacter(router.query.id);
      props.getUserCharacters(auth.user.uid);
    }
  }, [auth]);

  React.useEffect(() => {
    if (deleted) {
      router.push("/profile");
    }
  }, [deleted]);

  React.useEffect(() => {
    if (editMessage) {
      message.success(editMessage);
    }
  }, [editMessage]);

  React.useEffect(() => {
    form.setFieldsValue({ public: visibility });
  }, [visibility]);

  const onFailed = () => {
    window.scrollTo(0, 0);
    message.error("There are some errors");
  };

  const submit = (values) => {
    if (typeof values.image === null) values.image = "";
    if (!values.image) delete values.imageCopyright;
    props.editCharacter({ ...values }, router.query.id);
  };

  return (
    <LoadingScreen loading={loading}>
      <RedirectComp type="404" condition={charaExists}>
        <RedirectComp
          type="403"
          condition={auth.user && auth.user.uid === character.authorId}
        >
          <div className="custom-form new-character">
            <div className="inner">
              <PageHeader
                className="site-page-header"
                onBack={() => router.push(`/character/${router.query.id}`)}
                title="Back to character"
              />
              <h2 className="side-heading">
                Edit character:
                {` ${character.firstname} ${
                  character.lastname && character.lastname
                }`}
              </h2>
              <CharacterForm
                submit={submit}
                onFailed={onFailed}
                form={form}
                character={character}
                characters={characters.filter((c) => c.id !== character.id)}
                visibility={visibility}
                setVisibility={setVisibility}
                loadingCharacter={loadingCharacter}
                type="edit"
                initialValues={{
                  firstname: character.firstname,
                  lastname: character.lastname || "",
                  age: character.age || 0,
                  gender: character.gender || "",
                  public: character.public,
                  ethnicity: character.ethnicity || "",
                  group: character.group || "",
                  residence: character.residence || "",
                  description: character.description || "",
                  nickname: character.nickname || "",
                  occupation: character.occupation || "",
                  relatives: character.relatives || [],
                  image: character.image || "",
                  imageCopyright: character.imageCopyright || "",
                }}
                deleteCharacter={props.deleteCharacter}
              />
            </div>
          </div>
        </RedirectComp>
      </RedirectComp>
    </LoadingScreen>
  );
};

const mapStateToProps = (state) => ({
  character: state.characters.character,
  characters: state.characters.userCharacters,
  loading: state.characters.loading,
  loadingCharacter: state.characters.loadingCharacter,
  characterId: state.characters.characterId,
  charaExists: state.characters.charaExists,
  editMessage: state.characters.message,
  deleted: state.characters.deleted,
});

export default connect(mapStateToProps, {
  getCharacter,
  editCharacter,
  getUserCharacters,
  deleteCharacter,
})(EditCharacter);
