// Toggle between Login and Register views
function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
   

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        loginTab.classList.remove('active');
        registerTab.classList.add('active');
    }
}

// Basic structural validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    const username = form.querySelector('input[name="username"]').value.trim();
    const password = form.querySelector('input[name="password"]').value;

    if (username.length < 3) {
        alert("Username must be at least 3 characters long.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    return true;
}

const button = document.getElementById('toggleBtn');
const section = document.getElementById('mySection');

const button1 = document.getElementById('closeBtn');
const section1 = document.getElementById('mySection');

const button2 = document.getElementById('closeBtn2');
const section2 = document.getElementById('mySection');


button.addEventListener('click', function() {
    section.style.display = 'block';
}
)
button1.addEventListener('click', function() {
    section.style.display = 'none';
}
)
button2.addEventListener('click', function() {
    section.style.display = 'none';
}
)

