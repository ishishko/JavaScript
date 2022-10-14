console.log(`Trabajando con Listas / Arrays`);

const bogota = "Bogota";
const lima = "Lima";
const santiago = "Santiago";
const BuenosAires = "Buenos Aires";

console.log(bogota, lima, santiago, BuenosAires);

const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Buenos Aires");
console.log(ciudadesDisponibles);

const ciudadesDisponibles2 = new Array();
ciudadesDisponibles2.push("Bogota");
console.log(ciudadesDisponibles2);
ciudadesDisponibles2.push("Lima");
ciudadesDisponibles2.push("Santiago");
ciudadesDisponibles2.push("Buenos Aires");
console.log(ciudadesDisponibles2);

const ciudad = ["Bogota", "Lima", "Santiago", "Buenos Aires"];
console.log(ciudad);

const ciudadesVendidas = [];
console.log(ciudadesVendidas);
ciudadesVendidas.push("Sao Pablo");
ciudadesVendidas.push("Paris");
ciudadesVendidas.push("Moscu");
ciudadesVendidas.push("Madrid");
console.log(ciudadesVendidas);

console.table(ciudadesDisponibles);
console.log(ciudadesDisponibles[0]);
console.log(ciudadesDisponibles[3]);

const cantidadDeCiudades = ciudadesDisponibles.length;
console.log(`Tenemos ${cantidadDeCiudades} disponibles`);

const eliminandoCiudades = ciudadesDisponibles2.splice(1, 2);
console.table(eliminandoCiudades);
console.log(`Quedaron ${eliminandoCiudades.length} ciudades`);
