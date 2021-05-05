const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const nav = document.getElementById('nav');

// Functions
function toggleNav() {
  nav.classList.toggle('open-nav');
}

// Event Listeners
openBtn.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);
