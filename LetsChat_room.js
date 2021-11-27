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

    function addRoom() {
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location="LetsChat_page.html"; }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
