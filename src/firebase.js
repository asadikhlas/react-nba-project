import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCaN3dJNk_PwX3vrTRGjcq7345MNEDWlko",
    authDomain: "nba-full-f431a.firebaseapp.com",
    databaseURL: "https://nba-full-f431a.firebaseio.com",
    projectId: "nba-full-f431a",
    storageBucket: "nba-full-f431a.appspot.com",
    messagingSenderId: "539933187022"
  };

  firebase.initializeApp(config);
  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseTeams,
      firebaseVideos
  }