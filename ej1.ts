class Producto {
  nombre: string;
  precio: number;
  categoria: string;
  stock: number;

  constructor(
    nombre: string,
    precio: number,
    categoria: string,
    stock: number,
  ) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }

  describir(): string {
    return `${this.nombre} (${this.categoria}): $${this.precio} - ${this.stock}`;
  }

  hayStock(cantidad: number): boolean {
    const existencia = this.stock >= cantidad;
    return existencia;
  }

  venderUnidades(cantidad: number): void {
    if (!this.hayStock(cantidad)) {
      return console.log("No hay suficiente stock");
    }

    this.stock = this.stock - cantidad;
    console.log(this.stock);
  }

  aplicarDescuento(porcentaje: number): number {
    if (porcentaje < 0 || porcentaje > 100) {
      throw new Error("Porcentaje no valido");
    }

    this.precio = this.precio * ((100 - porcentaje) / 100);

    return this.precio;
  }
}

const producto = new Producto("mate", 5000, "casa", 5);

console.log(producto);

console.log(producto.hayStock(5));

producto.venderUnidades(4);

console.log(producto.aplicarDescuento(10));

console.log(producto);
