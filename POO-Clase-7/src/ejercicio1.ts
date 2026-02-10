class Usuario {
  public username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  login(pass: string): string {
    if (pass === this.password) {
      return "Acceso concedido";
    } else {
      return "Contraseña incorrecta";
    }
  }
}

const user = new Usuario("admin", "admin123");
console.log(user.login("admin123"));

