class instituto{
    falta: number;
    nombre: string;

    constructor(falta:number, nombre:string){
        this.falta = falta;
        this.nombre = nombre;
    }

    public seleccion(): void{
        if(this.falta == 1){
            console.log(`${this.nombre} debe cancelar $1 por llegada tardia`);
        }else if(this.falta == 2) {
            console.log(`${this.nombre} debe cacelar $3 por caminar en los pasillo en hora de clase`);
        }else if (this.falta == 5){
            console.log(`${this.nombre} debe cancelar $5 por no andar vestimenta apropiada`)
        }
    }
}

let alumno = new instituto(2, "Juan");
alumno.seleccion();
