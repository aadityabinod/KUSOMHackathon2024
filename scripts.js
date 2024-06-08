document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    emailError.textContent = '';
    passwordError.textContent = '';

    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
    }

    if (password !== confirmPassword) {
        passwordError.textContent = 'Passwords do not match.';
        return;
    }

    // Form is valid
    alert('Form submitted successfully!');
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
