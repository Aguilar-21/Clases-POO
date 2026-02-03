class Nota {

    titulo: string;
    detalle: string;

    constructor(titulo: string, detalle: string) {
        this.titulo = titulo;
        this.detalle = detalle;
    }

    contarPalabras(): number {
        const palabras = this.detalle.trim().split(" ");
        return palabras.length;
    }

    guardarNota(): void {
        const cantidad = this.contarPalabras();
        console.log("Nota guardada");
        console.log("Título:", this.titulo);
        console.log("Cantidad de palabras:", cantidad);
    }
}

// Objeto
const nota = new Nota(
    "Tarea",
    "Hacer el ejercicio de programación orientada a objetos"
);

nota.guardarNota();
