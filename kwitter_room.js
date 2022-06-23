// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDR6tVIZnOzffjfbmCQ_7P1zlkykMaOMko",
      authDomain: "kwitter-68a1a.firebaseapp.com",
      databaseURL: "https://kwitter-68a1a-default-rtdb.firebaseio.com",
      projectId: "kwitter-68a1a",
      storageBucket: "kwitter-68a1a.appspot.com",
      messagingSenderId: "792051327140",
      appId: "1:792051327140:web:e2c242a1f58722c7b1c631"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
