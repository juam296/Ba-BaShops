// Lógica de validación del formulario de registro en Ba&BaShops
document.getElementById('formRegistro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    if (pass !== confirmPass) {
        alert('¡Las contraseñas no coinciden!');
        return;
    }

    alert('¡Registro simulado con éxito en Ba&BaShops!');
    this.reset();
});