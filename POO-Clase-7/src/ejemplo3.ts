class persona {
    protected edad: number;

    constructor(edad:number){
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