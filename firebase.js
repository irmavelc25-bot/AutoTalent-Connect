const firebaseConfig = {
  apiKey: "AIzaSyBuGKEJ2x3gNQ4Qx7NOAH1dKe_oVPhCPO8",
  authDomain: "autotalent-connect.firebaseapp.com",
  projectId: "autotalent-connect",
  storageBucket: "autotalent-connect.firebasestorage.app",
  messagingSenderId: "698185565220",
  appId: "1:698185565220:web:959dd5da11252ea3cc04b1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();