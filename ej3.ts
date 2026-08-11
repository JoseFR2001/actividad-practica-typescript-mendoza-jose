class Empleado {
  protected nombre: string;
  protected antiguedad: number;

  constructor(nombre: string, antiguedad: number) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }

  calcularSueldo(): number {
    return 0;
  }

  describir(): string {
    return `${this.nombre} (${this.antiguedad} años) - sueldo: ${this.calcularSueldo()}`;
  }
}

class EmpleadoFijo extends Empleado {
  sueldoBase: number;

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad);
    this.sueldoBase = sueldoBase;
  }

  calcularSueldo(): number {
    const bonoAntiguedad = this.sueldoBase * (1 + (this.antiguedad * 2) / 100);
    return bonoAntiguedad;
  }
}

const empleado1 = new EmpleadoFijo("Jose", 12, 1000);
console.log(empleado1);

console.log(empleado1.calcularSueldo());
