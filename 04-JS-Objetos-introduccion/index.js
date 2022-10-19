class Cliente {
  nombreCliente;
  dniCliente;
  rutCliente;
}

class CuentaCorriente {
  nroCuenta;
  saldoCuenta;
  agencia;

  constructor() {
    this.nroCuenta = "";
    this.saltoCuenta = 0;
    this.agencia = "";
  }

  depositosEnCuenta(valor) {
    this.saldoCuenta += valor;
  }
  retiroDeCuenta(valor) {
    this.saldoCuenta -= valor;
  }
}

const cliente1 = new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "12365478";
cliente1.rutCliente = "12365478";

const cCorriente1 = new CuentaCorriente();
cCorriente1.nroCuenta = "789456123";
cCorriente1.saldoCuenta = 1000;
cCorriente1.agencia = 1001;

const cliente2 = new Cliente();
cliente2.nombreCliente = "leonardo";
cliente2.dniCliente = "45678912";
cliente2.rutCliente = "45678912";

const cCorriente2 = new CuentaCorriente();
cCorriente2.nroCuenta = "987456321";
cCorriente2.saldoCuenta = 500;
cCorriente2.agencia = 1002;

console.log(cCorriente3.saldoCuenta);
cCorriente3.depositosEnCuenta(500);
console.log(cCorriente3.saldoCuenta);
cCorriente3.retiroDeCuenta(250);
console.log(cCorriente3.saldoCuenta);

/*console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
console.log(cCorriente1);
console.log(cCorriente2);
console.log(cCorriente3);
*/
