import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBAEFJQEMDS7SuP_v8HaGPdfNM2L4RXRyk',
  appId: '1:756938937223:ios:2548cdc97569abed74f922',
  messagingSenderId: '756938937223',
  projectId: 'spartan-3b328',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchVideoUrl = async (docId: string): Promise<string | null> => {
  try {
    const collectionRef = collection(db, "farms");
    const doesCollectionExist = await checkCollectionExists("farms");

    if (!doesCollectionExist) {
      console.log("Collection 'farms' does not exist!");
      return null;
    }

    const docRef = doc(collectionRef, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Document data:", data);

      if (data && data.ipaddress) {
        const ipAddress = data.ipaddress.trim();
        const port = data.port ? data.port.trim() : '8000'; // Default to port 80 if not provided
        const videoUrl = `http://${ipAddress}:${port}`; // Adjust based on your camera's URL
        return videoUrl;
      } else {
        console.log("Document does not contain 'ipaddress' field!");
        return null;
      }
    } else {
      console.log("Document does not exist!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return null;
  }
};

const checkCollectionExists = async (collectionName: string): Promise<boolean> => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking collection existence:", error);
    return false;
  }
};
