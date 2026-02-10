"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    login(pass) {
        if (pass === this.password) {
            return "Acceso concedido";
        }
        else {
            return "Contraseña incorrecta";
        }
    }
}
const user = new Usuario("admin", "admin123");
console.log(user.login("admin123"));
//# sourceMappingURL=ejercicio1.js.map