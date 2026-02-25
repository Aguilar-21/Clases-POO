"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class Programa {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.pedirUsuario();
    }
    pedirUsuario() {
        this.rl.question("Ingresa tu usuario: ", (respuesta) => {
            const usuario = respuesta;
            this.pedirContraseña(usuario);
        });
    }
    pedirContraseña(usuario) {
        this.rl.question("Ingresa tu contraseña: ", (respuesta) => {
            const contraseña = respuesta;
            this.validarLogin(usuario, contraseña);
            this.cerrar();
        });
    }
    validarLogin(usuario, contraseña) {
        if (usuario === "admin" && contraseña === "admin123") {
            console.log("Login correcto. Rol: Administrador");
        }
        else if (usuario === "cliente" && contraseña === "cliente123") {
            console.log("Login correcto. Rol: Cliente");
        }
        else if (usuario === "invitado" && contraseña === "invitado123") {
            console.log("Login correcto. Rol: Invitado");
        }
        else {
            console.log("Usuario incorrecto");
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const app = new Programa();
app.iniciar();
//# sourceMappingURL=ejercicio2.js.map