console.log(`Trabajando Iteradores o Lazos`);

const ciudadesVendidas = [];
ciudadesVendidas.push("Sao Pablo");
ciudadesVendidas.push("Paris");
ciudadesVendidas.push("Moscu");
ciudadesVendidas.push("Madrid");
ciudadesVendidas.push("Buenos Aires");

const ciudadDestino = "Paris";
let posicion = 0;

console.log(ciudadesVendidas);

while (posicion < ciudadesVendidas.length) {
  if (ciudadesVendidas[posicion] == ciudadDestino) {
    console.log(`Destino disponible`);
    break;
  }
  posicion++;
}

for (let i = 0; i < ciudadesVendidas.length; posicion++) {
  if (ciudadesVendidas[posicion] == ciudadDestino) {
    console.log(`Destino disponible`);
    break;
  }
}
