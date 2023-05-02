import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";


//  Create auth and provider for google frtom Firebase
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// Create Context
export const AuthContext = createContext(null);




const AuthProviders = ({ children }) => {

  //State for the logged in/signed in user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register user with email and password login
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email and password
  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log out
  const logOut = () => {
    setLoading(true)
    signOut(auth);
  };

  // Login with Google Account
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
    // onAuthStateChanged e firebase signed in user ta kei pabe, and state e set korbe
  };
  

  // Observe Auth State Change
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //user Jevabei log in/sign in koruk, ekhane currentUser hisebe oi user k pawa jay
      console.log("Auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Auth context e jei object pathabo
  const authInfo = {
    user,
    createUser,
    logIn,
    googleSignIn,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
