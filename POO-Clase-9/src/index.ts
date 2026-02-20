class persona{
    nombre:string;
    edad:number;
    telefono:number;

    constructor(nombre:string, edad:number, telefono:number){
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }

    mostrar() : void {
        alert("El nombre es: "+this.nombre);
    }
}

let nombre: string = prompt("Ingrese su nombre") || "";
let edad:number = parseInt(prompt("Ingrese su nombre") || "");

let people = new persona(nombre, 20, 90498829);
people.mostrar