"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class persona {
    constructor(edad) {
        this.edad = edad;
    }
}
class Estudiante extends persona {
    mostrarEdad() {
        return this.edad;
    }
}
const e = new Estudiante(20);
console.log(e.mostrarEdad);
//# sourceMappingURL=ejemplo3.js.map