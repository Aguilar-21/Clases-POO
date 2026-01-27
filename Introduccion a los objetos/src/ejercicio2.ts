let estudiante = {
    nombre: "María",
    carrera: "Ingeniería",
    saludar(): void {
        console.log("Hola, soy " + this.nombre);
    }
};

estudiante.saludar();