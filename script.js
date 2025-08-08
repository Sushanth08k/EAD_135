const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous messages
  messageDiv.textContent = '';
  messageDiv.className = '';

  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  // Basic validation
  if (username.length < 3) {
    showMessage('Username must be at least 3 characters long.', 'error');
    return;
  }

  if (!validateEmail(email)) {
    showMessage('Please enter a valid email address.', 'error');
    return;
  }

  if (password.length < 6) {
    showMessage('Password must be at least 6 characters long.', 'error');
    return;
  }

  if (password !== confirmPassword) {
    showMessage('Passwords do not match.', 'error');
    return;
  }

  // If all validation passes
  showMessage('Registration successful!', 'success');
  form.reset();
});

function showMessage(message, type) {
  messageDiv.textContent = message;
  messageDiv.className = type;
}

function validateEmail(email) {
  // Simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
