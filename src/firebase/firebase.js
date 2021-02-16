import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyBKjJewopicLEZd9Z5pLHrxfYzAV1Ov7wo",
  authDomain: "expensify-5cd2e.firebaseapp.com",
  databaseURL: "https://expensify-5cd2e-default-rtdb.firebaseio.com",
  projectId: "expensify-5cd2e",
  storageBucket: "expensify-5cd2e.appspot.com",
  messagingSenderId: "673942120965",
  appId: "1:673942120965:web:26a57795820df316868a6c",
  measurementId: "G-SDCTMXXM53",
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: "Regan Jones",
});
