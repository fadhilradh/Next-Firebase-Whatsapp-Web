import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDU-vG0yxmQj8oYkRfmxaWokNuX7O_2eUo",
  authDomain: "web-whatsapp-2.firebaseapp.com",
  projectId: "web-whatsapp-2",
  storageBucket: "web-whatsapp-2.appspot.com",
  messagingSenderId: "697698004041",
  appId: "1:697698004041:web:5914d35226292637632398",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
