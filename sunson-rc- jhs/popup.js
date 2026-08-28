const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('popupOverlay');

openBtn.addEventListener('click', () => overlay.classList.add('open'));
closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
