  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

  import {getAnalytics  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

  import {getDatabase,ref,get, set, push,child, onChildAdded,remove } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

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


  // const analytics = getAnalytics(app);
  
  const database = getDatabase();
  
  // const dbRef = ref(getDatabase());

  
  var inp=document.getElementById("inp")
  var main = document.getElementById("tasklist")
  var list = document.getElementById("list1")
  var editid;
    var name=localStorage.getItem("name")
    console.log(name)
    var arr = [];
    
    
    
    
    window.loginup=function(){
  window.location.replace('login.html')
  localStorage.removeItem("name")

}







  window.add=function(){
    var obj;
    let taskreference;
if(editid){
obj ={
  task: inp.value,
  undatetime:JSON.stringify(new Date()),
  dateTime: JSON.stringify(new Date()),
  id:editid
};
// console.log(obj)
taskreference = ref(database, `taska/${name}/${editid}`)
editid="";

}else{


   obj = {
        task:inp.value,
        dateTime: JSON.stringify(new Date())
      }; 

      const keyref = ref(database,`taska/${name}/`)
      obj.id=push(keyref).key
   
 taskreference = ref(database, `taska/${name}/${obj.id}`)
    }
set(taskreference,obj);
      inp.value = ""
      takedata();
  }


  window.renderData = function(){

    main.innerHTML = "" ;
    for(var i=0 ; i < arr.length ; i++){
      main.innerHTML += `<li id="option ">${arr[i].task} ${arr[i].dateTime} <span>
      <button class="btn" onclick="dele('${arr[i].id}')">DELETE</button>
      <button class="btn" onclick="edit('${arr[i].task}','${arr[i].id}')">EDIT</button>
  </span></li>`
    }
    }
    
    
    window.takedata=function(){
  arr = []  
    const taskreference = ref(database, `taska/${name}/`)
  
    onChildAdded(taskreference,function(data){
        arr.push(data.val())
      renderData()
      console.log(arr[0].task)
      })            
   
  }
  

  
  window.dele=function(id){
    console.log(id)
    const taskreference = ref(database,`taska/${name}/${id}`)
    remove(taskreference)
    .then(function(e){
      console.log(e)
      takedata()
    })
  .catch(function(er){
    console.log(er)
  })
  }



  window.edit=function(task,id){
inp.value = task;
editid = id;

  }
































