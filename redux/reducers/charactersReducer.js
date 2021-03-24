import {
  GET_USER_CHARACTERS,
  GET_FAVORITE_CHARACTERS,
  ADD_CHARACTER,
  GET_CHARACTER,
  EDIT_CHARACTER,
  GET_STORY_CHARACTERS,
} from "../../utils/constants";

const initialState = {
  userCharacters: [],
  favCharacters: [],
  loading: true,
  loadingCharacter: false,
  characterId: "",
  message: "",
  character: {
    id: "",
    authorId: "",
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
  },
  charaExists: false,
  secondaryCharacters: [],
  mainArr: [],
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        message: action.payload.message,
        characterId: action.payload.characterId,
        loadingCharacter: action.payload.loading,
      };
    case EDIT_CHARACTER:
      return {
        ...state,
        message: action.payload.message,
        loadingCharacter: action.payload.loading,
      };
    case GET_CHARACTER:
      return {
        ...state,
        charaExists: action.payload.charaExists,
        character: action.payload.charaExists
          ? action.payload.character
          : state.character,
        loading: action.payload.loading,
      };
    case GET_USER_CHARACTERS:
      return {
        ...state,
        loading: false,
        userCharacters: action.payload,
      };
    case GET_FAVORITE_CHARACTERS:
      return {
        ...state,
        favCharacters: action.payload,
      };
    case GET_STORY_CHARACTERS:
      return {
        ...state,
        secondaryCharacters: action.payload.secondaryCharacters,
        mainArr: action.payload.mainArr,
      };
    default:
      return state;
  }
};

export default charactersReducer;
