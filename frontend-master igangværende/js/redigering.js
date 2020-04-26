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

db.collection("current jobs").doc(window.localStorage.getItem('currentJob')).get().then(function(doc) {
	let productCount = doc.data()['productCount']
	let startnum = doc.data()['startNumber']
	let titel = doc.data()['title']
	for (x = 0; x < productCount; x++) {
		document.querySelector('body').innerHTML += `<div class="Redigeringsbox">
      <div class="Opgavenum">
        <h1>${startnum + x}</h1>
      </div>
      <div class="Opgavenavn">
        <h1>${titel}</h1>
      </div>


      <button type="button" class="BtnRedig">Redigere</button>
      <button type="button" class="btnGodkend">Godkend</button>
    </div>`
	}
})