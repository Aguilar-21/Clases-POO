let persona = {
    nombre: "Oscar",
    edad: 25,
    altura: 1.79,
    nacionalidad: "Salvadoreño",
    
    presentar(): void {
     console.log(`Hola soy ${this.nombre} mido ${this.altura} y soy ${this.nacionalidad}`);   
    }
};

persona.presentar();
