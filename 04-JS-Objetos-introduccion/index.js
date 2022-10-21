import { CuentaCorriente } from "./CuentaCorriente.js";
import { Cliente } from "./Clente.js";

const cliente1 = new Cliente();
const cuentaDeCliente1 = new CuentaCorriente();
cliente1.nombreCliente = "Shimbo";
cliente1.dniCliente = "29903752";
cliente1.rutCliente = "20299037526";

cuentaDeCliente1.nroCuenta = "0001";
cuentaDeCliente1.agencia = "1752";
cuentaDeCliente1.cliente = cliente1;

const cliente2 = new Cliente();
const cuentaDeCliente2 = new CuentaCorriente();

cliente2.nombreCliente = "Pety";
cliente2.dniCliente = "30563126";
cliente2.rutCliente = "23305631264";

cuentaDeCliente2.nroCuenta = "0002";
cuentaDeCliente2.agencia = "1751";
cuentaDeCliente2.Cliente = cliente2;

console.log(cuentaDeCliente2.Cliente);

cuentaDeCliente2.Cliente = 0;

console.log(cuentaDeCliente2.Cliente);
