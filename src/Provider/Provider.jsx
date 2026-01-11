import React from "react";
import { AuthContext } from "../Context/Context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Provider = ({ children }) => {
  const SignUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const user = { name: "anik" };
  return <AuthContext value={user}>{children}</AuthContext>;
};

export default Provider;
