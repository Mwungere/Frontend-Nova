
import { handleRequest } from "./RequestFunctions";
import {
  signInWithPopup,
  signOut,
  User,
  GoogleAuthProvider,
} from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "@/components/Firebase";
import { useState } from "react";
let user: User;
export const signFinally = async (url: string) => {
     try {
       if (auth !== null) {
         const provider = new GoogleAuthProvider();
         const result = await signInWithPopup(auth, provider);
         user = result.user;
           await user.getIdTokenResult();
       }

       const datas = {
         names: user?.displayName,
         email: user?.email,
         password: "123456",
         confirmPassword: "123456",
       };

       handleRequest(datas, url );
     } catch (error: any) {
       toast.error(error.message, {
         duration: 3000,
         position: "top-right",
       });
     }
}

export const logout = () => {
  if (auth !== null) {
    signOut(auth);
  }
};