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

class EmpleadoPorHoras extends Empleado {
  horasTrabajadas: number;
  valorHoras: number;

  constructor(
    nombre: string,
    antiguedad: number,
    horasTrabajadas: number,
    valorHoras: number,
  ) {
    super(nombre, antiguedad);
    this.horasTrabajadas = horasTrabajadas;
    this.valorHoras = valorHoras;
  }

  calcularSueldo(): number {
    return this.horasTrabajadas * this.valorHoras;
  }
}

class EmpleadoPorComision extends Empleado {
  ventasDelMes: number;
  porcentajeComision: number;

  constructor(
    nombre: string,
    antiguedad: number,
    ventasDelMes: number,
    porcentajeComision: number,
  ) {
    super(nombre, antiguedad);
    this.ventasDelMes = ventasDelMes;
    this.porcentajeComision = porcentajeComision;
  }

  calcularSueldo(): number {
    return this.ventasDelMes * (this.porcentajeComision / 100);
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

const empleados: Empleado[] = [
  new EmpleadoFijo("José", 5, 1200),
  new EmpleadoPorHoras("Santiago", 10, 40, 12),
  new EmpleadoPorComision("Gonzalo", 13, 50, 15),
];

for (let i = 0; i < empleados.length; i++) {
  console.log(`Sueldos: ${empleados[i]?.calcularSueldo()}`);
}

function calcularNomina(listaEmpleados: Empleado[]): number {
  let total = 0;
  for (const empleado of listaEmpleados) {
    total += empleado.calcularSueldo();
  }
  return total;
}

console.log(calcularNomina(empleados));
