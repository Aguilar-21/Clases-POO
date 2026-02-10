"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sistema {
    verificarRol(rol) {
        switch (rol) {
            case "admin":
                return "Acceso total";
            case "editor":
                return "Acceso limitado";
            case "usuario":
                return "Acceso básico";
            default:
                return "Rol no válido";
        }
    }
}
const sistema = new Sistema();
console.log(sistema.verificarRol("admin"));
//# sourceMappingURL=ejercicio4.js.map