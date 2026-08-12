class Persona {
  private readonly dni: string;
  nombre: string;

  private _edad: number;
  private _email: string;

  constructor(dni: string, nombre: string, edad: number, email: string) {
    this.dni = dni;
    this.nombre = nombre;

    this._edad = 0;
    this._email = "";

    this.edad = edad;
    this.email = email;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(valor: number) {
    if (valor < 0 || valor > 120) {
      throw new Error("La edad no puede ser menor a 0 ni mayor a 120.");
    }
    this._edad = valor;
  }

  get email(): string {
    return this._email;
  }

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El email debe contener un @.");
    }
    this._email = valor;
  }

  get esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  get datosPublicos(): string {
    return `Nombre: ${this.nombre}, ¿es mayor de edad?: ${this.esMayorDeEdad}`;
  }
}

const persona1 = new Persona("123456789", "Jose", 25, "jose@mail.com");
console.log(persona1.datosPublicos);

try {
  persona1.email = "jose.com";
} catch (error) {
  console.log("Error capturado: " + error);
}
