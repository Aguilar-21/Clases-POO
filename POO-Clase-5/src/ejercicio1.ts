class GYM {
    peso: number;
    estatura: number;

    constructor(peso:number, estatura:number) {
        this.peso = peso; 
        this.estatura = estatura;
    }

    public IMC (): void {
        let estado;
        let imc = (this.peso/(this.estatura * this.estatura));
        if(imc < 18.5){
            estado = "Bajo peso"
        }else if (imc >= 18.5 && imc <=24.9){
            estado = "Normal"
        }else if(imc >= 25 && imc <= 29.9){
            estado = "Sobre peso"
        }else if(imc >= 30){
            estado = "Obesidad"
        }
        console.log("El IMC es de: " + imc.toFixed(2) + " y su estado es: " + estado);
    }
}

let cliente = new GYM(50,1.86);
cliente.IMC();