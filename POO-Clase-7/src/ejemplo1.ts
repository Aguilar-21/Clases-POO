class usuario {
    public nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }
}

const u = new usuario ("juan");
console.log(u.nombre);