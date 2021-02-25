import { db, auth } from "../fbConfig";

import { GET_PROFILE } from "../../utils/constants";

export const log_in = (email, password) => (dispatch) => {
  console.log(email, password);
  auth.signInWithEmailAndPassword(email, password);
};

export const getProfile = () => (dispatch) => {
  db.collection("users")
    .doc("0K9FO3KtCZOm2VCItZrssTJ8xbE3")
    .onSnapshot((doc) => {
      console.log("coucou");
      return dispatch({
        type: GET_PROFILE,
        payload: { id: doc.id, ...doc.data() },
      });
    });
};
