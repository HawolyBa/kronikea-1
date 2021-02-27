import { auth, db } from "../fbConfig";

export const getItem = (item, type) => (dispatch) => {
  db.collection(item)
    .where("authorId", "==", auth.currentUser.uid)
    .get()
    .then((docs) => {
      let items = [];
      docs.forEach((doc) => {
        items = [...items, { id: doc.id, ...doc.data() }];
      });
      return items;
    })
    .then((items) => {
      dispatch({ type: type, payload: items });
    });
};
