import  firebase from "firebase";
import "firebase/storage";
var firebaseApp= firebase.initializeApp({
  apiKey: "AIzaSyAfUvDa_YCfKHzwGY4AfJFxBgGtt2GvgvA",
  authDomain: "silveroxks.firebaseapp.com",
  projectId: "silveroxks",
  storageBucket: "silveroxks.appspot.com",
  messagingSenderId: "314339333085",
  appId: "1:314339333085:web:379d651700f8a17ccb1c34",
  measurementId: "G-NR37MV8WNY"
});
  // Initialize Firebase
  
 var db= firebaseApp.firestore();
 export{db};
 const storage = firebase.storage()
 export  {
    storage, firebase as default
  };
  export const app= firebaseApp;