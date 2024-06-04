import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCkNbWJpBPSKNYlVVCKx4lBeXzVf8wDbOo",
  authDomain: "nova-413808.firebaseapp.com",
  projectId: "nova-413808",
  storageBucket: "nova-413808.appspot.com",
  messagingSenderId: "792852690256",
  appId: "1:792852690256:web:a075eaa2e96f62dae56855",
  measurementId: "G-5MV0BSD070",
};

let app: any;
let auth: Auth | null = null;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
}

export { app, auth };