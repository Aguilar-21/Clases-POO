class persona {
    peso: number;
    altura: number;

    constructor(peso:number, altura:number){
         this.peso = peso;
        this.altura = altura;    
    }
    calcularIMC(): number {
        return this.peso / (this.altura * this.altura)
    }
}

const cliente = new persona (70, 1.75);
console.log("El IMC del cliente es:", cliente.calcularIMC().toFixed(2));