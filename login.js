
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

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

var email = document.getElementById("email");
var password = document.getElementById("password");
var name = document.getElementById("names")



window.signup=function(){
  window.location.replace('index.html')
}



window.login=function login(e){
    e.preventDefault();

    var model = {
      email: email.value,
      password: password.value,
      };
      signInWithEmailAndPassword(auth,model.email,model.password)
      .then(function(success) {

        localStorage.setItem("name",name.value)
          window.location.replace('todo.html')
          console.log(success.user.uid)})
          
          .const(function(err){console.log(err)
        
    })

    
}


