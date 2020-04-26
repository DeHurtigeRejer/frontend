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

let redirects = {
	"boss": "Chef",
	"Coworker": "Medarbejder"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();

//UID Kode:
//Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

async function login() {
	let Username = document.querySelector("input[type='text']").value
	let Password = document.querySelector("input[type='password']").value
	let Login = false;
	let loginID;
	await db.collection("Users").get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			if (doc.data()['Username'] == Username && doc.data()['Password'] == Password) {
				Login = true;
				loginID = "split" + doc.id + "split";
				//Sætter en cookie så vi altid kan tjekke rettigheder
				document.cookie = loginID
				var decodedCookie = decodeURIComponent(document.cookie);
				var ca = decodedCookie.split('split');
				console.log(ca)
				console.log(doc.data()['Role'])
				window.location.href = redirects[doc.data()['Role']] + ".html"
			}
		});
	});
	if (Login) {
		alert("Rigtigt login")
	} else {
		alert("Forkert login")
		document.querySelector("input[type='text']").value = ""
		document.querySelector("input[type='password']").value = ""
	}
}