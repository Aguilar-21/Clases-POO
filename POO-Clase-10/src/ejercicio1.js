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
        this.pedirNota();
    }
    pedirNota() {
        this.rl.question("Ingresa una nota: ", (respuesta) => {
            const note = Number(respuesta);
            this.evaluarNota(note);
            this.cerrar();
        });
    }
    evaluarNota(note) {
        if (note >= 9) {
            console.log("Excelente");
        }
        else if (note >= 7 && note <= 8.9) {
            console.log("Bueno");
        }
        else if (note >= 6 && note <= 6.9) {
            console.log("Regular");
        }
        else {
            console.log("Reprobado");
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const notas = new Programa();
notas.iniciar();
//# sourceMappingURL=ejercicio1.js.map