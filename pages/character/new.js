import React from "react";
import { useRouter } from "next/router";
import { Form, message } from "antd";
import { connect } from "react-redux";

import { useAuth } from "../../hooks/userHooks";
import {
  addCharacter,
  getUserCharacters,
} from "../../redux/actions/charactersActions";

import LoadingScreen from "../../components/hoc/LoadingScreen";
import RedirectComp from "../../components/hoc/RedirectComp";
import CharacterForm from "../../components/forms/CharacterForm";

const newCharacter = (props) => {
  const { characters, characterId, loadingCharacter } = props;
  const auth = useAuth();
  const [form] = Form.useForm();
  const router = useRouter();

  const [visibility, setVisibility] = React.useState(true);

  React.useEffect(() => {
    if (auth.user) {
      props.getUserCharacters(auth.user.uid);
    }
  }, [auth]);

  React.useEffect(() => {
    form.setFieldsValue({ public: visibility });
  }, [visibility]);

  React.useEffect(() => {
    if (characterId) {
      router.push(`/character/${characterId}`);
    }
  }, [characterId]);

  const onFailed = () => {
    window.scrollTo(0, 0);
    message.error("There are some errors");
  };

  const submit = (values) => {
    if (typeof values.image === null) values.image = "";
    if (!values.image) delete values.imageCopyright;
    props.addCharacter({
      ...values,
      relativesArr: values.relatives.map((c) => c.character_id),
      authorId: auth.user.uid,
      authorName: auth.user.username,
      userImage: auth.user.image ? auth.user.image : "",
    });
  };

  return (
    <LoadingScreen loading={auth.isLoading}>
      <RedirectComp condition={auth.user} type="redirect">
        <RedirectComp
          verifyEmail={auth.verifyEmail}
          condition={auth.user && auth.user.emailVerified}
          type="verify"
        >
          <div className="new-character custom-form">
            <div className="inner">
              <h2 className="side-heading">Add a new character</h2>
              <CharacterForm
                submit={submit}
                onFailed={onFailed}
                form={form}
                characters={characters}
                visibility={visibility}
                setVisibility={setVisibility}
                loadingCharacter={loadingCharacter}
                type="add"
                initialValues={{
                  firstname: "",
                  lastname: "",
                  age: 0,
                  gender: "",
                  public: true,
                  ethnicity: "",
                  group: "",
                  residence: "",
                  description: "",
                  nickname: "",
                  occupation: "",
                  relatives: [],
                }}
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
  loadingCharacter: state.characters.loadingCharacter,
  characterId: state.characters.characterId,
});

export default connect(mapStateToProps, { getUserCharacters, addCharacter })(
  newCharacter
);
