"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    operacion(tipo, monto) {
        switch (tipo) {
            case "depositar":
                this.saldo += monto;
                return `Saldo actual: ${this.saldo}`;
            case "retirar":
                if (monto > this.saldo) {
                    return "Fondos insuficientes";
                }
                else {
                    this.saldo -= monto;
                    return `Saldo actual: ${this.saldo}`;
                }
            default:
                return "Operación no válida";
        }
    }
}
const cuenta = new CuentaBancaria("Ana", 1000);
console.log(cuenta.operacion("depositar", 500));
console.log(cuenta.operacion("retirar", 200));
console.log(cuenta.operacion("retirar", 1500));
//# sourceMappingURL=ejercicio5.js.map