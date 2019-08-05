import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBj2ppchIMyqA_pvydt_kFFU9WoYtDDbtI",
  authDomain: "kellyn-expensify-app.firebaseapp.com",
  databaseURL: "https://kellyn-expensify-app.firebaseio.com",
  projectId: "kellyn-expensify-app",
  storageBucket: "kellyn-expensify-app.appspot.com",
  messagingSenderId: "64097871719",
  appId: "1:64097871719:web:2290fcb9b4d93497"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };