class Empleado {
  constructor(
    public nombre: string,
    protected salario: number
  ) {}
}

class Gerente extends Empleado {
  bono(): number {
    if (this.salario > 1000) {
      return this.salario * 0.2;
    } else {
      return this.salario * 0.1;
    }
  }
}

const g = new Gerente("Carlos", 1200);
console.log(g.bono());
