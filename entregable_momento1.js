function validarAcceso() {
    const USUARIO_CORRECTO = "admin";
    const CONTRASENA_CORRECTA = "7567";

    
    const MAX_INTENTOS = 3;
    let intentos = 0;
    let acceso = false;

        while (intentos < MAX_INTENTOS && !acceso) {
        let usuarioIngresado = prompt("Ingrese su usuario:");
        let contrasenaIngresada = prompt("Ingresa tu contraseña:");

        
        if (usuarioIngresado === USUARIO_CORRECTO && contrasenaIngresada === CONTRASENA_CORRECTA) {
            acceso = true;
            console.log("¡Bienvenido chico/a al sistema siii!");
        } else {

            intentos++;
            
            if (intentos < MAX_INTENTOS) {
                console.log("Datos incorrectos. Intento " + intentos + " de " + MAX_INTENTOS + ".");
            } else {
                console.log("Usuario bloqueado Ha superado el número de intentos");
            }
        }
    }
}

validarAcceso();