const authModal = document.querySelector('.auth-modal');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtnModal = document.querySelector('.login-btn-modal');
const closeBtnModal = document.querySelector('.close-btn-modal');
const profileBox = document.querySelector('.profile-box');
const avatarCircle = document.querySelector('.avatar-circle');
const alertBox = document.querySelector('.alert-box');






registerLink.addEventListener('click', () => authModal.classList.add('slide'));
loginLink.addEventListener('click', () => authModal.classList.remove('slide'));

// loginBtnModal.addEventListener('click', () => body1.classList.add('show'));
// closeBtnModal.addEventListener('click', () => authModal.classList.remove('show', 'slide'));

avatarCircle.addEventListener('click', () => profileBox.classList.toggle('show'));

setTimeout(() => alertBox.classList.add('show'), 50);

setTimeout(() => {
    alertBox.classList.remove('show');
    setTimeout(() => alertBox.remove(), 1000);
}, 6000);



const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('popupOverlay');

openBtn.addEventListener('click', () => overlay.classList.add('open'));
closeBtn.addEventListener('click', () => overlay.classList.remove('open'));









