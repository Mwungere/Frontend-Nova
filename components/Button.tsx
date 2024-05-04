"use client"
import GoogleButton from "react-google-button";
import { signInWithPopup, signOut, User, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./Firebase";
import {  useState } from "react";

const logout = () => {
  if (auth !== null) { 
    signOut(auth);
  }
};

const googleSignIn = () => {
  if (auth !== null) { 
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }
};

const Button = () => {
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = async () => {
    try {
      if (auth !== null) {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
        localStorage.setItem("user", JSON.stringify(user));
        console.log(result.user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <GoogleButton title="Sign up with Google" onClick={googleSignIn} />
    </div>
  );
};

export default Button;
