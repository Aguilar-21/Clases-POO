"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(pass) {
        this.password = pass;
    }
    validar(pass) {
        return this.password === pass;
    }
}
const u = new Usuario("1234");
console.log(u.validar("12"));
//# sourceMappingURL=ejemplo2.js.map