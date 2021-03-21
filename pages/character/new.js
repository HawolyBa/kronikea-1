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
    props.addCharacter({
      ...values,
      authorId: auth.user.uid,
      authorName: auth.user.username,
    });
  };

  return (
    <LoadingScreen loading={auth.isLoading}>
      <RedirectComp condition={auth.user} type="redirect">
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
