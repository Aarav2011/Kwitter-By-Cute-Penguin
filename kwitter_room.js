
var firebaseConfig = {
      apiKey: "AIzaSyBMazS6Z30Gn-TB2JVk3p8-u5rUJ933I3Y",
      authDomain: "kwitter-12c01.firebaseapp.com",
      databaseURL: "https://kwitter-12c01-default-rtdb.firebaseio.com",
      projectId: "kwitter-12c01",
      storageBucket: "kwitter-12c01.appspot.com",
      messagingSenderId: "688281695544",
      appId: "1:688281695544:web:a2ae5aee836819e5337dcd",
      measurementId: "G-7K4S0JPD0B"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
