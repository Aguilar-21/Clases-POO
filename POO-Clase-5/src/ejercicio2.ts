class conversor{
    temp:number;
    constructor(temp:number){
        this.temp = temp;
    }

    public FC ():void {
        let Fahrenheit = (this.temp-(32/1.8))
        console.log(`La temperatura en Fahrenheit es: ${Fahrenheit}`);
    }
    public CF ():void {
        let Celsius = (this.temp * 1.8) + 32
        console.log(`La temperatura en Celsius es: ${Celsius}`);
    }
    public KF ():void {
        let Kelvin = ((this.temp -32) * (5/9)) + 273.15
        console.log(`La temperatura en Kelvin es: ${Kelvin}`);
    }
    public KC ():void {
        let Kelvin = this.temp + 273.15
        console.log(`La temperatura en Kelvin es: ${Kelvin}`);
    }
}

let grado = new conversor(100);
grado.FC();
grado.CF();
grado.KF();
grado.KC();