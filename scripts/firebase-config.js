  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAvVgpPlmxEKJN1yviMv2UbDxsDj7tu2jE",
      authDomain: "let-schat-aabac.firebaseapp.com",
      databaseURL: "https://let-schat-aabac.firebaseio.com",
      projectId: "let-schat-aabac",
      storageBucket: "let-schat-aabac.appspot.com",
      messagingSenderId: "980448095268",
      appId: "1:980448095268:web:8e44c6904d134b36e6fcb1",
      measurementId: "G-G253ZHLCZX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();