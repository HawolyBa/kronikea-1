import {
  GET_PROFILE,
  GET_FAVORITE_AUTHORS,
  GET_FOLLOWERS,
  types,
} from "../../utils/constants";

const initialState = {
  profile: {},
  favAuthors: {
    isLoading: true,
    authors: [],
  },
  followers: {
    isLoading: true,
    authors: [],
  },
  isFollowing: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_FAVORITE_AUTHORS:
      return {
        ...state,
        favAuthors: {
          isLoading: false,
          authors: action.payload,
        },
      };
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: {
          isLoading: false,
          authors: action.payload,
        },
      };
    case types.IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.payload,
      };
  }
  return state;
};

export default reducer;
