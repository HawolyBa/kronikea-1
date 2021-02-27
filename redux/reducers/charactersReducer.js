import {
  GET_USER_CHARACTERS,
  GET_FAVORITE_CHARACTERS,
} from "../../utils/constants";

const initialState = {
  userCharacters: [],
  favCharacters: [],
  loading: true,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default charactersReducer;
