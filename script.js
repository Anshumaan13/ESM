function showLogin(role) {
    document.getElementById('login-modal').style.display = 'block';
    sessionStorage.setItem('role', role);
}

function closeLogin() {
    document.getElementById('login-modal').style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = sessionStorage.getItem('role');

    if (username === 'admin' && password === 'admin123' && role === 'admin') {
        window.location.href = 'admin-dashboard.html';
    } else if (username === 'vendor' && password === 'vendor123' && role === 'vendor') {
        window.location.href = 'vendor-dashboard.html';
    } else if (username === 'user' && password === 'user123' && role === 'user') {
        window.location.href = 'user-dashboard.html';
    } else {
        alert('Incorrect credentials!');
    }
}
