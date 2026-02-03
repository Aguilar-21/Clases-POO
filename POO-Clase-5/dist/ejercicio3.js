"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class instituto {
    constructor(falta, nombre) {
        this.falta = falta;
        this.nombre = nombre;
    }
    seleccion() {
        if (this.falta == 1) {
            console.log(`${this.nombre} debe cancelar $1 por llegada tardia`);
        }
        else if (this.falta == 2) {
            console.log(`${this.nombre} debe cacelar $3 por caminar en los pasillo en hora de clase`);
        }
        else if (this.falta == 5) {
            console.log(`${this.nombre} debe cancelar $5 por no andar vestimenta apropiada`);
        }
    }
}
let alumno = new instituto(2, "Juan");
alumno.seleccion();
//# sourceMappingURL=ejercicio3.js.map