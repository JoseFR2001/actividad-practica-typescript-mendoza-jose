class CuentaBancaria {
  readonly titular: string;
  private saldo: number;
  private historial: string[];

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;

    this.historial = [];
  }

  depositar(monto: number): number {
    if (monto <= 0) {
      throw new Error("Error con el monto del depósito");
    }

    this.saldo += monto;
    this.historial.push(`Depósito: ${monto}`);
    console.log(this.historial);

    return this.saldo;
  }

  retirar(monto: number): number {
    if (monto > this.saldo || monto <= 0) {
      throw new Error("Error con el monto que intenta retirar");
    }

    this.saldo -= monto;
    this.historial.push(`Retiro: ${monto}`);

    return this.saldo;
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  obtenerHistorial(): string[] {
    return [...this.historial];
  }
}

const cuenta = new CuentaBancaria("Jose", 0);

console.log(cuenta);

cuenta.depositar(500);

console.log(cuenta);

cuenta.retirar(500);

console.log(cuenta);

console.log(cuenta.consultarSaldo());
console.log(cuenta.obtenerHistorial());
