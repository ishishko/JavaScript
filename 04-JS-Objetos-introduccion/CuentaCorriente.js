import { Cliente } from "./Clente.js";

export class CuentaCorriente {
  #cliente;
  nroCuenta;
  agencia;
  #saldoCuenta;
  static cantidad = 0;

  constructor(cliente, numero, agencia) {
    this.cliente = cliente;
    this.nroCuenta = numero;
    this.agencia = agencia;
    this.#saldoCuenta = 0;
    CuentaCorriente.cantidad++;
  }

  set cliente(valor) {
    if (valor instanceof Cliente) {
      this.#cliente = valor;
    }
  }
  get cliente() {
    return this.#cliente;
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
