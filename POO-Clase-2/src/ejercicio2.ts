let estudiante = {
    nombre: "Maria",
    carrera: "Ingeniería",
    saludar(): void {
        console.log("Hola, soy " + this.nombre)
    }
};

estudiante.saludar();