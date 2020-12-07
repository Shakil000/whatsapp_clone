import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA1pmX2W_MyL3wyEWVTp_zrrRS0EknJNuE",
    authDomain: "whatsapp-d121c.firebaseapp.com",

    projectId: "whatsapp-d121c",
    storageBucket: "whatsapp-d121c.appspot.com",
    messagingSenderId: "1070079638714",
    appId: "1:1070079638714:web:f9e1644baf5544d4b2d683",
    measurementId: "G-KGX1ZN3002"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;