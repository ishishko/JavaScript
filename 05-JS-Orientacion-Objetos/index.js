/*Importación de clases*/

import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuentas/Cuenta.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Director } from "./Empledos/Director.js";
import { Empleado } from "./Empledos/empleado.js";
import { Gerente } from "./Empledos/Gerente.js";

/*const cliente = new Cliente("Leonardo", "13804050", "123224");

const cliente2 = new Cliente("María", "16979808", "8989");

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, "9985", "001", 0);
console.log(cuentaAhorroLeonardo);

const cuentaNominaLeonardo = new CuentaNomina(cliente, "9854", "001", 100);
cuentaNominaLeonardo.depositoEnCuenta(150);
console.log(cuentaNominaLeonardo.verSaldo());
cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());
*/

const empleado1 = new Empleado("Juan Perez", "12345612", 8000);
const gerente1 = new Gerente("Pedro Rivas", "78945612", 12000);
const director1 = new Director("Elena Moreno", "654789123", 15000);

console.log(empleado1.verBonificacion());
console.log(gerente1.verBonificacion());
console.log(director1.verBonificacion());
