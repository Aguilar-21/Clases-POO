"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
}
class Gerente extends Empleado {
    bono() {
        if (this.salario > 1000) {
            return this.salario * 0.2;
        }
        else {
            return this.salario * 0.1;
        }
    }
}
const g = new Gerente("Carlos", 1200);
console.log(g.bono());
//# sourceMappingURL=ejercicio3.js.map