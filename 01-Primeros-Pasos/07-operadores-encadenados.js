console.log(`Trabajando con condiciones y Booleanos`);

const ciudadesVendidas = [];
ciudadesVendidas.push("Sao Pablo");
ciudadesVendidas.push("Paris");
ciudadesVendidas.push("Moscu");
ciudadesVendidas.push("Madrid");

const edadComprador = 17;
const estaAcompanado = true;
const tienePasaje = true;

if (edadComprador >= 18 || estaAcompanado) {
  console.log(`El comprador puede comprar pasajes`);
  console.log(`Ciudades Disponibles`);
  console.table(ciudadesVendidas);
} else {
  console.log(`El comprador no es mayor de edad`);
  console.log(`No podemos ofrecer Viajes`);
}

console.log(`Proceso de enbarque \n \n`);
if (tienePasaje && (edadComprador >= 18 || estaAcompanado)) {
  console.log(`Comprador con Pasaje, Feliz Viaje`);
} else {
  console.log(`No es posible hacer el embarque`);
}
