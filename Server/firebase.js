// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByG72prW1ZOMrwn4XuRNv4Bo1GZT7-0iA",
    authDomain: "slack-clone-73cf2.firebaseapp.com",
    databaseURL: "https://slack-clone-73cf2.firebaseio.com",
    projectId: "slack-clone-73cf2",
    storageBucket: "slack-clone-73cf2.appspot.com",
    messagingSenderId: "309119775799",
    appId: "1:309119775799:web:72c320b853ab7c87067bb2",
    measurementId: "G-KBT57TW6YT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;