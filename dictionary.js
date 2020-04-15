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


db.collection("Countries").get().then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
		for (x in doc.data()) {
			countrys.push(doc.data()[x])
		}
	});
});


updateData()

function updateData() {
	countrys.forEach((country, index) => {
		document.querySelectorAll("div[class='country']")[index].innerHTML = "";
		document.querySelectorAll("div[class='country']")[index].innerHTML = "<h1>" + countrys[index] + "</h1>";
	});
	db.collection("Dictionary").get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			countrys.forEach((country, index) => {
				document.querySelectorAll("div[class='country']")[index].innerHTML += '<h2>' + doc.data()[country] + '</h2>'
			});
		});
	});

	db.collection("Countries").get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			for (x in doc.data()) {
				document.querySelector('#inputs').innerHTML += "<label>" + doc.data()[x] + " </label><input type='text' name='value' value=''>"
			}
		});
	});
}


// Get DOM Elements
const modal = document.querySelector('.modalColor');
const modalBtn = document.querySelector('#dictionaryButton');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


function openModal() {
	modal.style.display = 'block';
	modalBtn.style.display = 'none';
}

// Close
function closeModal() {
	modal.style.display = 'none';
	modalBtn.style.display = 'block';
}

async function addToDatabase() {
	let allValues = document.querySelectorAll("input[name='value']")
	let newValues = {};
	await db.collection("Countries").get().then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			for (x in doc.data()) {
				console.log(allValues[x].value)
				newValues[doc.data()[x]] = allValues[x].value
			}
		});
	});
	await db.collection("Dictionary").add(newValues)
	updateData()
	closeModal()
}

// Close If Outside Click
function outsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
		modalBtn.style.display = 'block';
	}
}