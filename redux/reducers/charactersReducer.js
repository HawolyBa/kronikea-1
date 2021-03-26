import { types } from "../../utils/constants";

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
  deleted: false,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CHARACTER:
      return {
        ...state,
        message: action.payload.message,
        characterId: action.payload.characterId,
        loadingCharacter: action.payload.loading,
      };
    case types.EDIT_CHARACTER:
      return {
        ...state,
        message: action.payload.message,
        loadingCharacter: action.payload.loading,
      };
    case types.DELETE_CHARACTER:
      return {
        ...state,
        loading: action.payload.loading,
        message: action.payload.message
          ? action.payload.message
          : state.message,
        deleted: action.payload.deleted
          ? action.payload.deleted
          : state.deleted,
        charaExists: action.payload.charaExists
          ? action.payload.charaExists
          : state.charaExists,
      };
    case types.GET_CHARACTER:
      return {
        ...state,
        charaExists: action.payload.charaExists,
        character: action.payload.charaExists
          ? action.payload.character
          : state.character,
        loading: action.payload.loading,
      };
    case types.GET_USER_CHARACTERS:
      return {
        ...state,
        loading: false,
        userCharacters: action.payload,
      };
    case types.GET_FAVORITE_CHARACTERS:
      return {
        ...state,
        favCharacters: action.payload,
      };
    case types.GET_STORY_CHARACTERS:
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
