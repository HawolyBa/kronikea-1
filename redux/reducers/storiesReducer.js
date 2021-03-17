import {
  GET_USER_STORIES,
  GET_FAVORITE_STORIES,
  GET_STORY,
  GET_CHAPTERS,
  ADD_STORY,
  EDIT_STORY,
  DISPATCH_ERROR,
  GET_USER_LOCATIONS,
  ADD_CHAPTER,
  GET_CHAPTER,
  EDIT_CHAPTER,
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
    mainCharacters: [],
  },
  loading: true,
  chapters: {
    loading: true,
    items: [],
  },
  message: "",
  storyId: "",
  loadingStory: false,
  loadingChapter: false,
  storyExists: true,
  userLocations: [],
  chapId: "",
  chapter: {
    id: "",
    title: "",
    number: 0,
    body: "",
    characters: [],
    locations: [],
    storyId: "",
    authorId: "",
    authorName: "",
    status: true,
  },
  chapterExists: true,
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPATCH_ERROR: {
      return {
        ...state,
        storyExists: action.storyExists,
        loading: false,
      };
    }
    case GET_STORY:
      return {
        ...state,
        loading: false,
        story: action.payload,
        storyExists: action.storyExists,
      };
    case GET_CHAPTER:
      return {
        ...state,
        loading: false,
        chapter: action.payload.chapter
          ? action.payload.chapter
          : state.chapter,
        chapterExists: action.payload.chapterExists,
      };
    case ADD_STORY:
      return {
        ...state,
        message: action.payload.message,
        storyId: action.payload.storyId,
        loadingStory: action.payload.loading,
      };
    case ADD_CHAPTER:
      return {
        ...state,
        message: action.payload.message,
        chapId: action.payload.chapId,
        loadingChapter: action.payload.loading,
      };
    case EDIT_CHAPTER:
      return {
        ...state,
        message: action.payload.message,
        loadingChapter: action.payload.loading,
      };
    case EDIT_STORY:
      return {
        ...state,
        message: action.payload.message,
        loadingStory: action.payload.loadingStory,
      };
    case GET_USER_STORIES:
      return {
        ...state,
        loading: false,
        userStories: action.payload,
      };
    case GET_USER_LOCATIONS:
      return {
        ...state,
        userLocations: action.payload,
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
