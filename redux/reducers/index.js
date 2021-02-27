import { combineReducers } from "redux";

import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import storiesReducer from "./storiesReducer";
import charactersReducer from "./charactersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  stories: storiesReducer,
  characters: charactersReducer,
});
export default rootReducer;
