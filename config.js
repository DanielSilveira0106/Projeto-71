import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAIBoH8PidO-2X5t3kbE0DG_ihC8MyS0Ec",
  authDomain: "projeto-campainha-55e40.firebaseapp.com",
  databaseURL: "https://projeto-campainha-55e40-default-rtdb.firebaseio.com",
  projectId: "projeto-campainha-55e40",
  storageBucket: "projeto-campainha-55e40.appspot.com",
  messagingSenderId: "130913720321",
  appId: "1:130913720321:web:37045ed71fdcae6faec800"
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
