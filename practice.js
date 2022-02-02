var firebaseConfig = {
    apiKey: "AIzaSyBwq2uuvf2ELfGOUtEeiMGibyzCV5sZfH8",
    authDomain: "class-test-bb0ab.firebaseapp.com",
    databaseURL: "https://class-test-bb0ab-default-rtdb.firebaseio.com",
    projectId: "class-test-bb0ab",
    storageBucket: "class-test-bb0ab.appspot.com",
    messagingSenderId: "336411397116",
    appId: "1:336411397116:web:913b73b33a4928e86d8079"
  };
  firebase.initializeApp(firebaseConfig)
  function adduser() {
      username = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose: "addinguser"});
  }
