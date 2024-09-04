document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Proste logowanie (dla celów demonstracyjnych)
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').textContent = 'Zalogowano pomyślnie!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Nieprawidłowe dane logowania.';
    }
});
