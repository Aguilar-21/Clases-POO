"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(nombre, edadAnimal, raza) {
        this.nombre = nombre;
        this.edadAnimal = edadAnimal;
        this.raza = raza;
    }
    accion1() {
        console.log('El perro tiene el nombre de:', this.nombre);
    }
}
let perro = new Animal('kaizer', 2, 'Pitbull');
perro.accion1();
//# sourceMappingURL=ejemplo.js.map