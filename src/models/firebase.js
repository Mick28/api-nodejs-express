// Importa las funciones que necesitas de los SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Agregar los SDK para los productos de Firebase que desee utilizar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase de la aplicación web
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
