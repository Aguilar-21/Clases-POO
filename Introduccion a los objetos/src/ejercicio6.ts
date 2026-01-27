let cuentaBancaria = {
    Banco: "Agricola",
    tipoDeCuenta: "Ahorro",
    saldo: 1300,
    numeroCuenta: 234566,

    depositar(monto: number): void {
        this.saldo += monto;
        console.log(`Deposito realizado, Saldo actual: ${this.saldo}`);
    },

    retirar(monto: number): void {
        if (monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro realizado. Saldo actual: $${this.saldo}`);
        } else {
            console.log("fondos insuficientes");
        }
    }
};

cuentaBancaria.depositar(200);
cuentaBancaria.retirar(500);