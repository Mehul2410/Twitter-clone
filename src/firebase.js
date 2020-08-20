import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDjuCWJy6Y05XDT1T1hVpdGiUptWxOzR2c",
    authDomain: "twitter-clone-f6b8d.firebaseapp.com",
    databaseURL: "https://twitter-clone-f6b8d.firebaseio.com",
    projectId: "twitter-clone-f6b8d",
    storageBucket: "twitter-clone-f6b8d.appspot.com",
    messagingSenderId: "700395422625",
    appId: "1:700395422625:web:261de881fe7bc00683c1e0",
    measurementId: "G-F01NGR32NR"
  });

  

  const db = firebaseApp.firestore();

  export default db;