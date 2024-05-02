document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    iniciarSesion();
});

function iniciarSesion() {
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    var responseMessage = document.getElementById("responseMessage");


    if (email === "usuario@example.com" && contraseña === "123456") {
        responseMessage.innerText = "¡Inicio de sesión exitoso!";
    } else {
        responseMessage.innerText = "Email o contraseña incorrectos. Por favor, inténtelo de nuevo.";
    }
}
