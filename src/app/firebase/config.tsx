import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
    
const firebaseConfig = {
  apiKey: process.env.NEXT_apiKey,
  authDomain: process.env.NEXT_authDomain,
  databaseURL:process.env.NEXT_PUBLIC_databaseURL,
  projectId: process.env.NEXT_projectId,
  storageBucket: process.env.NEXT_storageBucket,
  messagingSenderId: process.env.NEXT_messagingSenderId,
  appId: process.env.NEXT_appId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {app, database}  