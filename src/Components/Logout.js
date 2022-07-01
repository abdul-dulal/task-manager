import React from "react";
import { signOut } from "firebase/auth";
import auth from "../Firebase.init";

const LogOut = () => {
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={logout}>LogOut</button>
    </div>
  );
};

export default LogOut;
