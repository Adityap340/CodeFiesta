import React, { createContext, useEffect } from "react";
import { useState } from "react";
import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = () => {
    setLoading(true);
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(user);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    login,
    signOut,
  };
  return <AuthContext.Provider value={authInfo}>{}</AuthContext.Provider>;
};

export default AuthProvider;
