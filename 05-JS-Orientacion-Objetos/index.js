/*Importación de clases*/

import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuentas/Cuenta.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";
import { Director } from "./Empledos/Director.js";
import { Empleado } from "./Empledos/empleado.js";
import { Gerente } from "./Empledos/Gerente.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

/*const cliente2 = new Cliente("María", "16979808", "8989");

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
empleado1.asignarClave("123456");
console.log(SistemaAutenticacion.login(empleado1, "123456"));

const gerente1 = new Gerente("Pedro Rivas", "78945612", 12000);
gerente1.asignarClave("654321");
console.log(SistemaAutenticacion.login(gerente1, "654321"));

const cliente = new Cliente("Leonardo", "13804050", "123224");
cliente.asignarClave("987654");
console.log(SistemaAutenticacion.login(cliente, ""));
