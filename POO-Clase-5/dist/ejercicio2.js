"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class conversor {
    constructor(temp) {
        this.temp = temp;
    }
    FC() {
        let Fahrenheit = (this.temp - (32 / 1.8));
        console.log(`La temperatura en Fahrenheit es: ${Fahrenheit}`);
    }
    CF() {
        let Celsius = (this.temp * 1.8) + 32;
        console.log(`La temperatura en Celsius es: ${Celsius}`);
    }
    KF() {
        let Kelvin = ((this.temp - 32) * (5 / 9)) + 273.15;
        console.log(`La temperatura en Kelvin es: ${Kelvin}`);
    }
    KC() {
        let Kelvin = this.temp + 273.15;
        console.log(`La temperatura en Kelvin es: ${Kelvin}`);
    }
}
let grado = new conversor(100);
grado.FC();
grado.CF();
grado.KF();
grado.KC();
//# sourceMappingURL=ejercicio2.js.map