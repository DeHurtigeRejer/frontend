let firebaseConfig = {
   apiKey: "AIzaSyCTC9-9gTwbk_0rw0SFjiNgTkFY5bQY2IQ",
   authDomain: "ordbog-61570.firebaseapp.com",
   databaseURL: "https://ordbog-61570.firebaseio.com",
   projectId: "ordbog-61570",
   storageBucket: "ordbog-61570.appspot.com",
   messagingSenderId: "571500616712",
   appId: "1:571500616712:web:2b7cde37a9f63a0f0345bd",
   measurementId: "G-4J9KL20VEW"
 };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 let db = firebase.firestore();

console.log('hi');
function login() {
  let Username = document.querySelector("input[type='text']").value
  let Password = document.querySelector("input[type='password']").value
  let Login = false;
  db.collection("Users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          if (doc.data()['Username'] == Username && doc.data()['Password'] == Password) {
            Login = true;
          } else {
            document.querySelector("input[type='text']").value = ""
            document.querySelector("input[type='password']").value = ""
          }
      });
  });
  if(Login) {
    console.log("Du er inde")
  } else {
    alert("Forkert login")
  }

}
