console.log(`Trabajando con condiciones y Booleanos`);

const ciudadesVendidas = [];
ciudadesVendidas.push("Sao Pablo");
ciudadesVendidas.push("Paris");
ciudadesVendidas.push("Moscu");
ciudadesVendidas.push("Madrid");

const edadComprador = 19;

/*
si (edadComprador >= 18) {
    ejecuta el codigo si el comprador es mayor de 18
}si no {
    ejecuta el codigo si no se cumple la condicion
}
*/

if (edadComprador >= 18) {
  console.log(`El comprador es mayor de edad`);
  console.log(`Ciudades Disponibles`);
  console.table(ciudadesVendidas);
} else {
  console.log(`El comprador no es mayor de edad`);
}

console.log(edadComprador >= 18);
console.log(edadComprador > 18);
console.log(edadComprador <= 18);
console.log(edadComprador < 18);
console.log(edadComprador == 18);
console.log(edadComprador === 18);
console.log(edadComprador != 18);
