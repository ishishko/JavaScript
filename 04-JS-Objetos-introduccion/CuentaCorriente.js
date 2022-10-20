export class CuentaCorriente {
  cliente;
  nroCuenta;
  agencia;
  #saldoCuenta;

  constructor() {
    this.cliente = null;
    this.nroCuenta = "";
    this.agencia = "";
    this.#saldoCuenta = 0;
  }

  depositosEnCuenta(valor) {
    if (valor > 0) {
      this.#saldoCuenta += valor;
      return this.#saldoCuenta;
    }
  }
  retiroDeCuenta(valor) {
    if (this.#saldoCuenta >= valor) {
      this.#saldoCuenta -= valor;
      return this.#saldoCuenta;
    }
  }
  verSaldo() {
    return this.#saldoCuenta;
  }
  transferirParaCuenta(valor, destino) {
    console.log(valor);
    console.log(destino);
    this.retiroDeCuenta(valor);
    destino.depositosEnCuenta(valor);
  }
}
