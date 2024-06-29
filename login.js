// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Retrieve user input
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Dummy authentication (replace with actual logic)
  if (email === 'user@example.com' && password === 'password') {
    // Redirect to dashboard or next page on successful login
    window.location.href = 'dashboard.html';
  } else {
    // Display login error message
    const loginMessage = document.getElementById('loginMessage');
    loginMessage.textContent = 'Invalid email or password. Please try again.';
    loginMessage.style.color = 'red';
  }
});
