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

const database = firebase.database();

database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "fanta lemon",
//   note: "",
//   amount: "1.25",
//   createdAt: Date.now(),
// });

// database.ref("notes/-MTfPL4ht3g_sx5FVTkK").update({
//   body: "do some bits",
// });

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React, Angular, Python",
// });

// database.ref().on(
//   "value",
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   (e) => {
//     console.log("Error: ", e);
//   }
// );

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Regan Jones",
//     age: 23,
//     job: {
//       title: "Software Developer",
//       company: "boohoo",
//     },
//     stressLevel: 6,
//     location: {
//       city: "Chester",
//       country: "UK",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((e) => {
//     console.log("This failed", e);
//   });

// database.ref("attributes").set({
//   height: "200cm",
//   weight: "110kg",
// });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "London",
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("removed");
//   })
//   .catch((e) => {
//     console.log("error: " + e);
//   });
