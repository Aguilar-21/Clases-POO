import * as readline from "readline";
class Programa {
    private rl: readline.Interface;
    constructor() {
        this.rl  = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }
    iniciar(): void {
        this.pedirNota();
    }
    pedirNota(): void {
        this.rl.question("Ingresa una nota: ",(respuesta: string) => {
            const note = Number(respuesta)
            this.evaluarNota(note);
            this.cerrar();
        });
    }
    evaluarNota(note: number): void {
         if (note < 0 || note > 10) {
        console.log("Nota inválida")
        return
    } if (note >= 9) {
            console.log("Excelente")
        }else if (note >= 7){
            console.log("Bueno")
        }else if(note >= 6){
            console.log("Regular")
        }else {
            console.log("Reprobado")
        }
    }
    cerrar(): void {
        this.rl.close();
    }
}

const notas = new Programa()
    notas.iniciar();
