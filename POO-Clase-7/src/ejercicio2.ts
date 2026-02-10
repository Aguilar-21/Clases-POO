class Producto {
  constructor(
    public nombre: string,
    private precio: number
  ) {}

  evaluarPrecio(): string {
    if (this.precio < 10) {
      return "Producto barato";
    } else if (this.precio <= 50) {
      return "Precio normal";
    } else {
      return "Producto caro";
    }
  }
}

const p1 = new Producto("Camiseta", 10);
console.log(p1.evaluarPrecio());
