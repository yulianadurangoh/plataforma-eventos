Paso 5 · js/login.js (validación de credenciales)
// Credenciales definidas por el equipo (solo para fines académicos).
// No usar contraseñas personales: cualquiera puede verlas en el navegador.
const USUARIO_VALIDO = "admin";
const CLAVE_VALIDA = "eventos2026";

const formulario = document.getElementById("formulario-login");
const mensajeError = document.getElementById("mensaje-error");

formulario.addEventListener("submit", function (evento) {
  // Evita que la página se recargue al enviar el formulario
  evento.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value;

  if (usuario === USUARIO_VALIDO && clave === CLAVE_VALIDA) {
    // Guarda que la sesión está activa para que eventos.html lo pueda revisar
    sessionStorage.setItem("sesionActiva", "true");
    window.location.href = "eventos.html";
  } else {
    mensajeError.textContent = "Usuario o contraseña incorrectos. Intenta de nuevo.";
    mensajeError.classList.remove("d-none");
  }
});