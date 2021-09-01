import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyASExfw5JvZl3v0IbCTYShabcZvpTsJ46s",
  authDomain: "voting-app-d9493.firebaseapp.com",
  projectId: "voting-app-d9493",
  storageBucket: "voting-app-d9493.appspot.com",
  messagingSenderId: "59547606678",
  appId: "1:59547606678:web:d03a5e7d9b05d420b92cb7",
  measurementId: "G-Q21GK2WL25"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();