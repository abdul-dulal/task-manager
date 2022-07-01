import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC8D58aXXX7IkigZ5brIB_WBAhDFo6LeM",
  authDomain: "task-manager-cf8d3.firebaseapp.com",
  projectId: "task-manager-cf8d3",
  storageBucket: "task-manager-cf8d3.appspot.com",
  messagingSenderId: "75555525976",
  appId: "1:75555525976:web:ad01b1c865570ec4dd412d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
