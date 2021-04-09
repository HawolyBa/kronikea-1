import { types } from "../../utils/constants";

const initialState = {
  userStories: [],
  homeStories: [],
  favStories: [],
  storyLocations: [],
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
  storyLocations: [],
  chapId: "",
  locId: "",
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
  location: {
    id: "",
    name: "",
    authorId: "",
    storyId: "",
    description: "",
    image: "",
    imageCopyright: "",
  },
  comments: [],
  loadingComments: true,
  chapterExists: true,
  isFavorite: false,
  loadingFav: true,
  loadingLoc: false,
  locationExists: true,
  deleted: false,
  userComment: {
    id: "",
    content: "",
  },
  rated: false,
  storiesFromSearch: [],
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPATCH_ERROR: {
      return {
        ...state,
        storyExists: action.storyExists,
        loading: false,
      };
    }
    case types.GET_STORY:
      return {
        ...state,
        loading: false,
        story: action.payload,
        storyExists: action.storyExists,
      };
    case types.GET_CHAPTER:
      return {
        ...state,
        loading: false,
        chapter: action.payload.chapter
          ? action.payload.chapter
          : state.chapter,
        chapterExists: action.payload.chapterExists,
      };
    case types.ADD_STORY:
      return {
        ...state,
        message: action.payload.message,
        storyId: action.payload.storyId,
        loadingStory: action.payload.loading,
      };
    case types.ADD_CHAPTER:
      return {
        ...state,
        message: action.payload.message,
        chapId: action.payload.chapId,
        loadingChapter: action.payload.loading,
      };
    case types.EDIT_CHAPTER:
      return {
        ...state,
        message: action.payload.message,
        loadingChapter: action.payload.loading,
      };
    case types.DELETE_CHAPTER:
      return {
        ...state,
        message: action.payload.message,
        loadingChapter: action.payload.loadingChapter,
      };
    case types.EDIT_STORY:
      return {
        ...state,
        message: action.payload.message,
        loadingStory: action.payload.loadingStory,
      };
    case types.DELETE_STORY:
      return {
        ...state,
        message: action.payload.message
          ? action.payload.message
          : state.message,
        deleted: action.payload.deleted
          ? action.payload.deleted
          : state.deleted,
        loading: action.payload.loading,
      };
    case types.ADD_LOCATION:
      return {
        ...state,
        locId: action.payload.locId,
        message: action.payload.message,
        loadingLoc: action.payload.loadingLoc,
      };
    case types.GET_LOCATION:
      return {
        ...state,
        loading: false,
        location: action.payload ? action.payload : state.location,
        locationExists: action.locationExists,
      };
    case types.DELETE_LOCATION:
      return {
        ...state,
        loading: false,
        deleted: action.payload.deleted
          ? action.payload.deleted
          : state.deleted,
        message: action.payload.message
          ? action.payload.message
          : state.message,
      };
    case types.GET_USER_STORIES:
      return {
        ...state,
        loading: false,
        userStories: action.payload,
      };
    case types.GET_USER_LOCATIONS:
      return {
        ...state,
        userLocations: action.payload,
      };
    case types.GET_STORY_LOCATIONS:
      return {
        ...state,
        storyLocations: action.payload,
      };
    case types.GET_FAVORITE_STORIES:
      return {
        ...state,
        favStories: action.payload,
      };
    case types.GET_CHAPTERS:
      return {
        ...state,
        chapters: {
          loading: false,
          items: action.payload,
        },
      };
    case types.IS_STORY_FAVORITE:
      return {
        ...state,
        isFavorite: action.payload,
        loadingFav: action.loadingFav,
      };
    case types.GET_STORY_LOCATIONS:
      return {
        ...state,
        storyLocations: action.payload,
      };
    case types.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload.comments,
        userComment: action.payload.userComment,
        loadingComments: action.payload.loadingComments,
      };
    case types.SUBMIT_COMMENT:
      return {
        ...state,
        message: action.message,
      };
    case types.RATE_COMMENT:
      return {
        ...state,
        rated: action.rated,
      };
    case types.GET_STORIES_FROM_SEARCH:
      return {
        ...state,
        loading: action.loading,
        storiesFromSearch: action.payload
          ? action.payload
          : state.storiesFromSearch,
      };
    case types.GET_HOME_STORIES:
      return {
        ...state,
        loading: action.loading,
        homeStories: action.payload,
      };
    default:
      return state;
  }
};

export default storiesReducer;
