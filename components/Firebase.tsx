import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth"; // Import Auth type from firebase/auth

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // Add other necessary Firebase configuration details
};

let app: any; // Use 'any' as a placeholder for app until it's initialized
let auth: Auth | null = null; // Initialize auth with null or use a specific Auth type

// Check if window object is available (client-side)
if (typeof window !== "undefined") {
  // Initialize Firebase (only on the client-side)
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
}

export { app, auth };
