import { CuentaCorriente } from "./CuentaCorriente.js";
import { Cliente } from "./Clente.js";

const cliente1 = new Cliente("Shimbo", "29903752", "20299037526");
const cuentaDeCliente1 = new CuentaCorriente(cliente1, "0001", "1752");

const cliente2 = new Cliente("Pety", "30563126", "23305631264");
const cuentaDeCliente2 = new CuentaCorriente(cliente2, "0002", "1751");

console.log(CuentaCorriente.cantidad);

const cuentaDeCliente = new CuentaCorriente(cliente2, "0002", "1751");
const cuentaDeCliente3 = new CuentaCorriente(cliente2, "0002", "1751");
const cuentaDeCliente4 = new CuentaCorriente(cliente2, "0002", "1751");
const cuentaDeCliente5 = new CuentaCorriente(cliente2, "0002", "1751");

console.log(CuentaCorriente.cantidad);
