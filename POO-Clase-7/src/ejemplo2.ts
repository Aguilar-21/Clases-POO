class Usuario {
    private password: string

    constructor(pass: string){
        this.password = pass;
    }

    validar(pass: string): boolean {
        return this.password == pass;
    }
}

const u = new Usuario("1234");
console.log(u.password);