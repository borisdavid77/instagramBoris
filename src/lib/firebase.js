// v9 compat packages are API compatible with v8 code
import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
<<<<<<< HEAD
import { FieldValue, arrayUnion, arrayRemove } from "firebase/firestore";
=======
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0

// here i want to import the seed file
// import seedDataBase from "../seed";

const config = {
  apiKey: "AIzaSyDzR40Stv7WPPaSscNEP2YQm-TTnPaQdGE",
  authDomain: "instagram-7ee32.firebaseapp.com",
  projectId: "instagram-7ee32",
  storageBucket: "instagram-7ee32.appspot.com",
  messagingSenderId: "259387437255",
  appId: "1:259387437255:web:7d06c44834ad531f444ee2",
};
const firebase = Firebase.initializeApp(config);
<<<<<<< HEAD
// const { FieldValue, arrayUnion, arrayRemove } = Firebase.firestore();
=======
const { FieldValue } = Firebase.firestore();
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0

// here is where I want to call the seed file (only ONCE)
// seedDataBase(firebase);
// console.log(firebase, FieldValue);
<<<<<<< HEAD
export { firebase, FieldValue, arrayUnion, arrayRemove };
=======
export { firebase, FieldValue };
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
