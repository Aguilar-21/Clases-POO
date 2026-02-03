"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class persona {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
}
const cliente = new persona(70, 1.75);
console.log("El IMC del cliente es:", cliente.calcularIMC().toFixed(2));
//# sourceMappingURL=ejercicio1.js.map