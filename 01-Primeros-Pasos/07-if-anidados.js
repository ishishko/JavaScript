console.log(`Trabajando con condiciones y Booleanos`);

const ciudadesVendidas = [];
ciudadesVendidas.push("Sao Pablo");
ciudadesVendidas.push("Paris");
ciudadesVendidas.push("Moscu");
ciudadesVendidas.push("Madrid");

const edadComprador = 17;
const estaAcompanado = true;

if (edadComprador >= 18) {
  console.log(`El comprador es mayor de edad`);
  console.log(`Ciudades Disponibles`);
  console.table(ciudadesVendidas);
} else if (estaAcompanado) {
  console.log(`El comprador menor esta acompañado`);
  console.log(`Ciudades Disponibles`);
  console.table(ciudadesVendidas);
} else {
  console.log(`El comprador no es mayor de edad`);
  console.log(`No podemos ofrecer Viajes`);
}
