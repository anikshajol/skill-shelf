import React, { useEffect, useState } from "react";
import { AuthContext, SearchContext, ThemeContext } from "../Context/Context";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useTheme from "../hooks/useTheme";
import { getFromLocalStorage } from "../utilities/localstorage";

const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [saveSkill, setSaveSkill] = useState(() => getFromLocalStorage());
  const googleProvider = new GoogleAuthProvider();
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(user);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  // useEffect(() => {
  //   const skills = getFromLocalStorage();

  //   setSaveSkill(skills);
  // }, []);
  const { theme, toggleTheme } = useTheme();

  const userInfo = {
    loginWithGoogle,
    logOut,
    signUpUser,
    user,
    setUser,
    updateUser,
    loading,
    setLoading,
    loginUser,
    saveSkill,
    setSaveSkill,
  };

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <SearchContext value={{ search, setSearch }}>
        <AuthContext value={userInfo}>{children}</AuthContext>
      </SearchContext>
    </ThemeContext>
  );
};

export default Provider;
