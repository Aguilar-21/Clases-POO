let producto = {
    nombre: "Cuaderno",
    precio: 1.25,
    marca: "facela",

    mostrar():void {
        console.log(`Cuaderno marca ${this.marca} costo ${this.precio}`);
    }
}

producto.mostrar();