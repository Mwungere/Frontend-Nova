"use client"
import GoogleButton from "react-google-button";
import { signInWithPopup, signOut, User, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./Firebase";
import { useEffect, useState } from "react";

const logout = () => {
  if (auth !== null) { // Check if auth is not null before calling signOut
    signOut(auth);
  }
};

const googleSignIn = () => {
  if (auth !== null) { // Check if auth is not null before calling signInWithPopup
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }
};

const Button = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (auth !== null) {
      const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
        setUser(currentUser);
        console.log(currentUser);
      });
      return () => {
        unsubscribe();
      };
    }
  }, [auth]);
  

  const handleGoogleSignIn = () => {
    googleSignIn();
  };

  return (
    <div>
      <GoogleButton title="Sign up with Google" onClick={handleGoogleSignIn} />
    </div>
  );
};

export default Button;
