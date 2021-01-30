import firebase from "firebase/app";
import {} from "firebase/database";

const config = {
  apiKey: "AIzaSyBv_5h-IUd0A3geC1DD-dRWEFakmBysfPU",
  authDomain: "todo-project-a56bf.firebaseapp.com",
  projectId: "todo-project-a56bf",
  storageBucket: "todo-project-a56bf.appspot.com",
  messagingSenderId: "174401079157",
  appId: "1:174401079157:web:c4d52124502a9e2c63353c",
  measurementId: "G-930GHEKWE3"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export default firebase;
