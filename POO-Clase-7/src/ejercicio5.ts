class CuentaBancaria {
  constructor(
    public titular: string,
    private saldo: number
  ) {}

  operacion(tipo: string, monto: number): string {
    switch (tipo) {
      case "depositar":
        this.saldo += monto;
        return `Saldo actual: ${this.saldo}`;

      case "retirar":
        if (monto > this.saldo) {
          return "Fondos insuficientes";
        } else {
          this.saldo -= monto;
          return `Saldo actual: ${this.saldo}`;
        }

      default:
        return "Operación no válida";
    }
  }
}

const cuenta = new CuentaBancaria("Ana", 1000); 
console.log(cuenta.operacion("depositar", 500));
console.log(cuenta.operacion("retirar", 200));
console.log(cuenta.operacion("retirar", 1500));
