import {
  GET_USER_STORIES,
  GET_FAVORITE_STORIES,
  GET_STORY,
  GET_CHAPTERS,
} from "../../utils/constants";

const initialState = {
  userStories: [],
  favStories: [],
  story: {
    id: "",
    banner: "",
    title: "",
    summary: "",
    authorName: "",
    authorId: "",
    tags: [],
  },
  loading: true,
  chapters: {
    loading: true,
    items: [],
  },
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORY:
      return {
        ...state,
        loading: false,
        story: action.payload,
      };
    case GET_USER_STORIES:
      return {
        ...state,
        loading: false,
        userStories: action.payload,
      };
    case GET_FAVORITE_STORIES:
      return {
        ...state,
        favStories: action.payload,
      };
    case GET_CHAPTERS:
      return {
        ...state,
        chapters: {
          loading: false,
          items: action.payload,
        },
      };
    default:
      return state;
  }
};

export default storiesReducer;
