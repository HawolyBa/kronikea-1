import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import { auth, db, provider } from "../redux/fbConfig";
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

  const signInWithGoogle = () => {
    return auth
      .signInWithPopup(provider)
      .then(async (response) => {
        setUser(response.user);
      })
      .catch((err) => console.log(err.message));
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

  const changeUsername = (username) => {
    return db
      .collection("users")
      .doc(auth.currentUser.uid)
      .update({ username });
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
    signInWithGoogle,
    changeUsername,
  };
}
