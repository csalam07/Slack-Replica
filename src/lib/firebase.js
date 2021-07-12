import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgOgdgROhtv1nmCh9xQpGlqC0w1NBeeJA",
  authDomain: "slack-b7072.firebaseapp.com",
  projectId: "slack-b7072",
  storageBucket: "slack-b7072.appspot.com",
  messagingSenderId: "334906314629",
  appId: "1:334906314629:web:f520252fb8054fed8cfeec",
  measurementId: "G-VMTN7JB6RT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
