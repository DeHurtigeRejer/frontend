// Get DOM Elements
const modalOpgave = document.querySelector('#Opgavemodal');
const modalBtnO = document.querySelector('#BtnOpgave');
const closeBtnO = document.querySelector('.Opgaveclose');

// Events
modalBtnO.addEventListener('click', openModalO);
closeBtnO.addEventListener('click', closeModalO);
window.addEventListener('click', outsideClickO);


function openModalO() {
	modalOpgave.style.display = 'block';
}

// Close
function closeModalO() {
	modalOpgave.style.display = 'none';
}

function outsideClickO(e) {
	if (e.target == modalOpgave) {
		modalOpgave.style.display = 'none';
	}
}
// Get DOM Elements
const modalTilføj	 = document.querySelector('#Tilføjmodal');
const modalBtnT = document.querySelector('#BtnTilføj');
const closeBtnT = document.querySelector('.Tilføjclose');
// Events
modalBtnT.addEventListener('click', openModalT);
closeBtnT.addEventListener('click', closeModalT);
window.addEventListener('click', outsideClickT);


function openModalT() {
	modalTilføj.style.display = 'block';
}

// Close
function closeModalT() {
	modalTilføj.style.display = 'none';
}

function outsideClickT(e) {
	if (e.target == modalTilføj) {
		modalTilføj.style.display = 'none';
	}
}
// Get DOM Elements
const modalStatus	 = document.querySelector('#Statusmodal');
const modalBtnS = document.querySelector('#BtnStatus');
const closeBtnS = document.querySelector('.Statusclose');
// Events
modalBtnS.addEventListener('click', openModalS);
closeBtnS.addEventListener('click', closeModalS);
window.addEventListener('click', outsideClickS);


function openModalS() {
	modalStatus.style.display = 'block';
}

// Close
function closeModalS() {
	modalStatus.style.display = 'none';
}

function outsideClickS(e) {
	if (e.target == modalStatus) {
		modalStatus.style.display = 'none';
	}
}
