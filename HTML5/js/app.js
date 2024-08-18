document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let formIsValid = true;

    // Validación del Nombre
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.validity.valueMissing) {
        nameError.textContent = 'El nombre es requerido.';
        formIsValid = false;
    } else if (name.validity.patternMismatch) {
        nameError.textContent = 'El nombre solo puede contener letras y espacios.';
        formIsValid = false;
    } else if (name.validity.tooShort || name.validity.tooLong) {
        nameError.textContent = 'El nombre debe tener entre 3 y 50 caracteres.';
        formIsValid = false;
    } else {
        nameError.textContent = '';
    }

    // Validación del Correo Electrónico
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (email.validity.valueMissing) {
        emailError.textContent = 'El correo electrónico es requerido.';
        formIsValid = false;
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
        formIsValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validación de la Contraseña
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if (password.validity.valueMissing) {
        passwordError.textContent = 'La contraseña es requerida.';
        formIsValid = false;
    } else if (password.validity.tooShort || password.validity.tooLong) {
        passwordError.textContent = 'La contraseña debe tener entre 8 y 20 caracteres.';
        formIsValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Validación de Confirmación de Contraseña
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
        formIsValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    // Si el formulario no es válido, prevenimos el envío
    if (!formIsValid) {
        event.preventDefault();
    }
});