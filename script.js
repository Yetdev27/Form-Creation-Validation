document.addEventListener('DOMContentLoaded', function () {
  // Step 1: Form Selection
  const form = document.getElementById('registration-form');

  // Step 2: Feedback Division Selection
  const feedbackDiv = document.getElementById('form-feedback');

  // Step 3: Form Submission and Event Prevention
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to the server

    // Step 4: Input Retrieval and Trimming
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const trimmedUsername = usernameInput.value.trim();
    const trimmedEmail = emailInput.value.trim();
    const trimmedPassword = passwordInput.value.trim();

    // Step 5: Validation Logic
    let isValid = true;
    const messages = [];

    // Username Validation
    if (trimmedUsername.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email Validation
    if (!trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      isValid = false;
      messages.push('Please enter a valid email address.');
    }

    // Password Validation
    if (trimmedPassword.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Step 6: Displaying Feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';
    }
  });
});
