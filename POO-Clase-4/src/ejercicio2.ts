class ConversorTemperatura {

    private valor: number;
    private escala: string;

    constructor(valor: number, escala: string) {
        this.valor = valor;
        this.escala = escala.toUpperCase();
    }

    aCelsius(): number {
        if (this.escala === "C") {
            return this.valor;
        } else if (this.escala === "F") {
            return (this.valor - 32) * 5 / 9;
        } else { // K
            return this.valor - 273.15;
        }
    }

    aFahrenheit(): number {
        const c = this.aCelsius();
        return (c * 9 / 5) + 32;
    }

    aKelvin(): number {
        const c = this.aCelsius();
        return c + 273.15;
    }
}


const temperatura = new ConversorTemperatura(30, "C");

console.log("En Celsius:", temperatura.aCelsius());
console.log("En Fahrenheit:", temperatura.aFahrenheit());
console.log("En Kelvin:", temperatura.aKelvin());
