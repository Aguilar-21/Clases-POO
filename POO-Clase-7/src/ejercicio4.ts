class Sistema {
  verificarRol(rol: string): string {
    switch (rol) {
      case "admin":
        return "Acceso total";
      case "editor":
        return "Acceso limitado";
      case "usuario":
        return "Acceso básico";
      default:
        return "Rol no válido";
    }
  }
}

const sistema = new Sistema();
console.log(sistema.verificarRol("admin"));