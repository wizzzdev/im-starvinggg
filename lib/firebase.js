import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBr9Tbv9sDqLm9V9VmD_LP_hG3Tq_haSL0",
  authDomain: "im-starvinggg.firebaseapp.com",
  databaseURL: "https://im-starvinggg.firebaseio.com/",
  storageBucket: "gs://im-starvinggg.appspot.com"
};
firebase.initializeApp(config);

export default { db: firebase.database(), auth: firebase.auth() };
