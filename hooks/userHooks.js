import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import { auth, db, storage } from "../redux/fbConfig";
import { message } from "antd";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({
    password: "",
    email: "",
    username: "",
  });

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setErrors({ password: "", email: "" });
        setUser(response.user);
        return response.user;
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setErrors({ ...errors, password: err.message });
        } else if (err.code === "auth/user-not-found") {
          setErrors({ ...errors, email: err.message });
        }
      });
  };

  const signup = (email, password, username) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        setErrors({
          password: "",
          email: "",
          username: "",
        });
        setUser({ ...response.user, username: username });
        return await db.collection("users").doc(response.user.uid).set({
          username,
          likesCount: 0,
          twitter: "",
          facebook: "",
          instagram: "",
          deviantart: "",
          biography: "",
          badges: [],
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          image: "",
          suspended: false,
        });
      })
      .then(() => {
        return auth.currentUser.sendEmailVerification();
      })
      .catch((err) => {
        if (
          err.code === "auth/email-already-in-use" ||
          err.code === "auth/invalid-email"
        ) {
          setErrors({ ...errors, email: err.message });
        } else if (err.code === "auth/weak-password") {
          setErrors({ ...errors, password: err.message });
        }
      });
  };

  const signout = () => {
    return auth.signOut().then(() => {
      setUser(false);
    });
  };

  const sendPasswordResetEmail = (email) => {
    return auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const confirmPasswordReset = (code, password) => {
    return auth.confirmPasswordReset(code, password).then(() => {
      return true;
    });
  };

  const verifyEmail = () => {
    auth.currentUser
      .sendEmailVerification()
      .then(() => {
        message.info("Verification Email sent. Check your inbox !");
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  const deleteAccount = () => {
    auth.currentUser.delete();

    // const batch = db.batch();
    // const userId = auth.currentUser.uid;
    // const allStories = db
    //   .collection("stories")
    //   .where("authorId", "==", userId)
    //   .get();
    // const allCharacters = db
    //   .collection("characters")
    //   .where("authorId", "==", userId)
    //   .get();
    // const allChapters = db
    //   .collection("chapters")
    //   .where("authorId", "==", userId)
    //   .get();
    // const allLocations = db
    //   .collection("locations")
    //   .where("authorId", "==", userId)
    //   .get();
    // const allNotifications = db
    //   .collection("characters")
    //   .where("recipient", "==", userId)
    //   .get();
    // const allUserLikes = db
    //   .collection("usersLikes")
    //   .where("sender", "==", userId)
    //   .get();
    // const allStoryLikes = db
    //   .collection("storiesLikes")
    //   .where("sender", "==", userId)
    //   .get();
    // const allCharactersLikes = db
    //   .collection("charactersLikes")
    //   .where("sender", "==", userId)
    //   .get();
    // const allComments = db
    //   .collection("comments")
    //   .where("userId", "==", userId)
    //   .get();
    // const allFollowers = db
    //   .collection("usersLikes")
    //   .where("recipient", "==", userId)
    //   .get();
    // const allStoryLiked = db
    //   .collection("storiesLikes")
    //   .where("recipient", "==", userId)
    //   .get();
    // const allCharactersLiked = db
    //   .collection("charactersLikes")
    //   .where("recipient", "==", userId)
    //   .get();

    // Promise.all([
    //   allStories,
    //   allCharacters,
    //   allNotifications,
    //   allUserLikes,
    //   allStoryLikes,
    //   allCharactersLikes,
    //   allComments,
    //   allChapters,
    //   allLocations,
    //   allFollowers,
    //   allStoryLiked,
    //   allCharactersLiked,
    // ])
    //   .then((res) => {
    //     res[0].forEach((story) =>
    //       batch.delete(db.collection("stories").doc(story.id))
    //     );
    //     res[1].forEach((chara) =>
    //       batch.delete(db.collection("characters").doc(chara.id))
    //     );
    //     res[2].forEach((notif) =>
    //       batch.delete(db.collection("notifications").doc(notif.id))
    //     );
    //     res[3].forEach((like) =>
    //       batch.delete(db.collection("usersLikes").doc(like.id))
    //     );
    //     res[4].forEach((like) =>
    //       batch.delete(db.collection("storiesLikes").doc(like.id))
    //     );
    //     res[5].forEach((like) =>
    //       batch.delete(db.collection("charactersLikes").doc(like.id))
    //     );
    //     res[6].forEach((comment) =>
    //       batch.update(db.collection("comments").doc(comment.id), {
    //         userDeleted: true,
    //       })
    //     );
    //     res[7].forEach((chap) =>
    //       batch.delete(db.collection("chapters").doc(chap.id))
    //     );
    //     res[7].forEach((loc) =>
    //       batch.delete(db.collection("locations").doc(loc.id))
    //     );
    //     res[7].forEach((like) =>
    //       batch.delete(db.collection("usersLikes").doc(like.id))
    //     );
    //     res[8].forEach((like) =>
    //       batch.delete(db.collection("storiesLikes").doc(like.id))
    //     );
    //     res[9].forEach((like) =>
    //       batch.delete(db.collection("charactersLikes").doc(like.id))
    //     );
    //     batch.delete(db.collection("users").doc(userId));
    //     auth.currentUser
    //       .delete()
    //       .then(() => {
    //         batch.commit();
    //       })
    //       .catch((err) => console.log(err));
    //   })
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        if (user.uid) {
          let username = "";
          setIsLoading(false);
          db.collection("users")
            .doc(user.uid)
            .onSnapshot((doc) => {
              if (doc.exists) {
                username = doc.data().username;
                setUser({ ...user, username, image: doc.data().image });
              }
            });
        }
      } else {
        setUser(false);
        setIsLoading(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    deleteAccount,
    isLoading,
    errors,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    verifyEmail,
  };
}
