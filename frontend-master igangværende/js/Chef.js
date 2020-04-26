let cookie = document.cookie.split("split")
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
let uid = document.cookie.split("split")[1]
db.collection("Users").doc(uid).get().then(function(doc) {
	if (doc.data()["Role"] != "boss") {
		window.location.href = "index.html"
	} else {
		document.querySelector('.Velkommen').innerHTML = "<h1> Velkommen" + doc.data()['Username'] + "</h1>"
	}
})

// Get DOM Elements for new task
const modalOpgave = document.querySelector('#Opgavemodal');
const modalBtn = document.querySelector('#BtnOpgave');
const closeBtn = document.querySelector('.Opgaveclose');

//Get DOM Elemtns for new coworker
const modalCoworker = document.querySelector('#Tilføjmodal')
const modalCoworkerBtn = document.querySelector('#BtnTilføj')
const closeCoworkerBtn = document.querySelector('.Tilføjclose')

//Get DOM Elemtns for new status
const modalStatus = document.querySelector('#Statusmodal')
const modalStatusBtn = document.querySelector('#BtnStatus')
const closeStatusBtn = document.querySelector('.Statusclose')


// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

modalCoworkerBtn.addEventListener('click', openCoworkerModal);
closeCoworkerBtn.addEventListener('click', closeCoworkerModal);
window.addEventListener('click', outsideClick);

modalStatusBtn.addEventListener('click', openStatusModal);
closeStatusBtn.addEventListener('click', closeStatusModal);
window.addEventListener('click', outsideClick);

//Confirm button
const confirmButton = document.querySelector('.btnGodkend')
confirmButton.addEventListener('click', createJob)

async function createJob() {
	let newjob = {
		title: "",
		productCount: 0,
		startNumber: 0,
	}

	newjob.title = document.querySelector('input[name=Titelopg]').value
	newjob.productCount = document.querySelector('input[name="Antalpro"]').value
	newjob.startNumber = document.querySelector('input[name="Startnum"]').value

	let documentid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

	await db.collection('current jobs').doc(documentid).set(newjob)
	for (q = 0; q < newjob.productCount; q++) {
		await db.collection('current jobs').doc(documentid).collection('product data').add({
			"title": "hallo!"
		})
	}

	window.localStorage.setItem('currentJob', documentid);

	window.location.href = 'redigering.html'

}

function openModal() {
	modalOpgave.style.display = 'block';
}

function openCoworkerModal() {
	modalCoworker.style.display = 'block'
}

function openStatusModal() {
	modalStatus.style.display = 'block'
}

// Close
function closeModal() {
	modalOpgave.style.display = 'none';
}

function closeCoworkerModal() {
	modalCoworker.style.display = 'none'
}

function closeStatusModal() {
	modalStatus.style.display = 'none'
}


function outsideClick(e) {
	if (e.target == modalOpgave) {
		modalOpgave.style.display = 'none';
	}
	if (e.target == modalCoworker) {
		modalCoworker.style.display = 'none'
	}
	if (e.target == modalStatus) {
		modalStatus.style.display = 'none'
	}
}