import * as readline from "readline";
class Programa {
    private rl: readline.Interface; 
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar(): void {
        this.pedirUsuario();
    }       
    pedirUsuario(): void {
        this.rl.question("Ingresa tu usuario: ",(respuesta: string) => {
            const usuario = respuesta;
            this.pedirContraseña(usuario);
        }); 
    }
    pedirContraseña(usuario: string): void {
        this.rl.question("Ingresa tu contraseña: ",(respuesta: string) => {
            const contraseña = respuesta;
            this.validarLogin(usuario, contraseña);
            this.cerrar();
        }); 
    }   
    validarLogin(usuario: string, contraseña: string): void {
        if (usuario === "admin" && contraseña === "admin123") {
            console.log("Login correcto. Rol: Administrador");  
        } else if (usuario === "cliente" && contraseña === "cliente123") {
            console.log("Login correcto. Rol: Cliente");
        } else if (usuario === "invitado" && contraseña === "invitado123") {
            console.log("Login correcto. Rol: Invitado");
        } else {
            console.log("Usuario incorrecto");
        }   
    }
    cerrar(): void {
        this.rl.close();
    }   
}

const app = new Programa(); 
app.iniciar();