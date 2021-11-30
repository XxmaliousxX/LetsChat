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

    user_name= localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send() {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

          document.getElementById("msg").value = "";
    }

    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }
      

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
