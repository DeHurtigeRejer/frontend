// Get DOM Elements
const modalOpgave = document.querySelector('#Opgavemodal');
const modalBtn = document.querySelector('#BtnOpgave');
const closeBtn = document.querySelector('.Opgaveclose');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


function openModal() {
	modalOpgave.style.display = 'block';
}

// Close
function closeModal() {
	modalOpgave.style.display = 'none';
}

function outsideClick(e) {
	if (e.target == modalOpgave) {
		modalOpgave.style.display = 'none';
    //De andre modals:
	}
}
