import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase";
import { auth, db } from "../redux/fbConfig";

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

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password).then((response) => {
      setUser(response.user);
      return response.user;
    });
  };

  const signup = (email, password, username) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        db.collection("users").add({
          badges: [],
          biography: "",
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          suspended: false,
          facebook: "",
          instagram: "",
          twitter: "",
          deviantart: "",
          likesCount: "",
          username: username,
          image: "",
        });
        return response.user;
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
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
    isLoading,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
