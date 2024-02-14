// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBbIcpDYZsy57LUB_SW5vjDQiS9NO1VbzU",
  authDomain: "my-panel-17e33.firebaseapp.com",
  projectId: "my-panel-17e33",
  storageBucket: "my-panel-17e33.appspot.com",
  messagingSenderId: "201847976115",
  appId: "1:201847976115:web:768b36cbc850cbe84fc0c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)