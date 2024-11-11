import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBIrA4V2yui3bbWAB3Bfa-tLVxStl-gG5Y",
	authDomain: "stockfollower-44004.firebaseapp.com",
	projectId: "stockfollower-44004",
	storageBucket: "stockfollower-44004.firebasestorage.app",
	messagingSenderId: "1008244118938",
	appId: "1:1008244118938:web:65fc1cddba8778e2b3d623",
	measurementId: "G-ZGPVDWWRCJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
