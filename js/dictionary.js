var firebaseConfig = {
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
var db = firebase.firestore();

let countrysHTML = document.querySelectorAll("div[class='country'] > h1");
let countrys = [];
for (x = 0; x < countrysHTML.length; x++) {
	countrys.push(countrysHTML[x].innerText)
}
db.collection("Dictionary").get().then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
		countrys.forEach((country, index) => {
			document.querySelectorAll("div[class='country']")[index].innerHTML += '<h2>' + doc.data()[country] + '</h2>'
		});
	});
});


function showModal() {
	document.querySelector("div[id='dictionaryButton']").style.display = "none"
	document.querySelector("div[class='modalColor']").style.display = "block"
}

function hideModal() {
	document.querySelector("div[id='dictionaryButton']").style.display = "block"
	document.querySelector("div[class='modalColor']").style.display = "none"
}