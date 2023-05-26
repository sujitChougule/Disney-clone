import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAg05Gxb3rUqmzYL51quhXLpvE0Hpagq1I",
  authDomain: "disneyplus-clone-3e52b.firebaseapp.com",
  projectId: "disneyplus-clone-3e52b",
  storageBucket: "disneyplus-clone-3e52b.appspot.com",
  messagingSenderId: "339094769307",
  appId: "1:339094769307:web:0aa934f00623011ab2803e",
  measurementId: "G-3Z41LX2FGY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
