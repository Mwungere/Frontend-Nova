import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth"; // Import Auth type from firebase/auth

const firebaseConfig = {
  apiKey: "AIzaSyCpBmTvKcTvLjLgo3tX94O7tjSecw350TI",
  authorizedDomains: [
    "social-login-and-signup-44139.firebaseapp.com",
    "social-login-and-signup-44139.web.app",
    "nova-ruddy.vercel.app",
  ],
  projectId: "social-login-and-signup-44139",
  storageBucket: "social-login-and-signup-44139.appspot.com",
  messagingSenderId: "569129685272",
  appId: "1:569129685272:web:fd055d1f48a39983070e6d",
  measurementId: "G-LY2JNY2ZSG",
};

let app: any;
let auth: Auth | null = null;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
}

export { app, auth };
