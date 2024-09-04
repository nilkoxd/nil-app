// Rejestracja użytkownika
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Sprawdź, czy użytkownik już istnieje
    if (localStorage.getItem(username)) {
        document.getElementById('message').textContent = 'Użytkownik już istnieje.';
    } else {
        // Zapisz dane użytkownika w localStorage
        localStorage.setItem(username, password);
        document.getElementById('message').textContent = 'Rejestracja udana! Możesz się teraz zalogować.';
        document.getElementById('message').style.color = 'green';
    }
});

// Logowanie użytkownika
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Sprawdź dane logowania
    if (localStorage.getItem(username) === password) {
        // Zapisz użytkownika jako zalogowanego
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'profile.html';
    } else {
        document.getElementById('message').textContent = 'Nieprawidłowe dane logowania.';
    }
});

// Wyświetl nazwę użytkownika na stronie profilu
window.onload = function() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('userProfile').textContent = loggedInUser;
    } else {
        // Jeśli użytkownik nie jest zalogowany, przekieruj do strony logowania
        window.location.href = 'index.html';
    }
};

// Wylogowanie użytkownika
document.getElementById('logoutBtn')?.addEventListener('click', function() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
});
