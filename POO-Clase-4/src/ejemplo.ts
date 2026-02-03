class Animal {
    nombre: string;
    edadAnimal: number;
    raza: string;

    constructor(nombre:string, edadAnimal:number, raza:string){
        this.nombre=nombre;
        this.edadAnimal=edadAnimal;
        this.raza=raza;
    }
    public accion1(): void {
        console.log('El perro tiene el nombre de:', this.nombre)
    }
}

let perro = new Animal('kaizer', 2, 'Pitbull');
perro.accion1();