let persona = {
    nombre: "José",
    edad: 21,
    altura: 1.65,
    presentar(): void {
        console.log(`Hola soy ${this.nombre} tengo ${this.edad} años y mi altura es ${this.altura} `)
    }

}

persona.presentar();
