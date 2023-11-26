
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDnDkRsVvYIcH8KInR8w15o_VNRKwDGuW8",
    authDomain: "myfirstauth-1beb5.firebaseapp.com",
    databaseURL: "https://myfirstauth-1beb5-default-rtdb.firebaseio.com",
    projectId: "myfirstauth-1beb5",
    storageBucket: "myfirstauth-1beb5.appspot.com",
    messagingSenderId: "166430350959",
    appId: "1:166430350959:web:713d02df552428f079779a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();




localStorage.removeItem("name")



var firstName=document.getElementById("firstName");
var email=document.getElementById("emails");
var passworrd=document.getElementById("passwords");


window.loginup=function (){
  window.location.replace('login.html')
}


window.signup=function signup(e){
    e.preventDefault();
    
    var model = {
    firstName: firstName.value,
    email: email.value,
    password:  passworrd.value,
    };

createUserWithEmailAndPassword(auth,model.email,model.password)
  .then(function(success) {
    console.log(success.user.uid)
localStorage.setItem("name",firstName.value)
    window.location.replace('todo.html')
})

    .const(function(err){console.log(err)

  })
}
