"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class inventario {
    constructor(id, producto, codigo, fecha, precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fecha = fecha;
        this.precio = precio;
    }
    agregar(precio2, precio3) {
        console.log("Producto agregado con precio: $" + this.precio);
        console.log("Precio de descuento: $" + precio2 + " y $" + precio3);
    }
}
let producto = new inventario(1, 'Toallas humedad', 'Psdm32', '2026/02/12', 2.5);
producto.agregar(2.45, 2.40);
//# sourceMappingURL=ejercicio1.js.map