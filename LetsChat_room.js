var firebaseConfig = {
      apiKey: "AIzaSyAi9Cbv_E1jg_NrTNoByEh6o8JMChk3TwE",
      authDomain: "lets-chat-b295e.firebaseapp.com",
      databaseURL: "https://lets-chat-b295e-default-rtdb.firebaseio.com",
      projectId: "lets-chat-b295e",
      storageBucket: "lets-chat-b295e.appspot.com",
      messagingSenderId: "430525048871",
      appId: "1:430525048871:web:eb553e886daabc60ff4602"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML="Welcome " + user_name

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
