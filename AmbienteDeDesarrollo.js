const prompt = require('prompt-sync')();

var costoBase = 50
var peso = 0
var distancia = 0

var cargoDistancia = 0
var cargoPeso = 0
var costoTotal= 0

peso = parseFloat(prompt("Ingrese el peso del paquete en libras: "))
distancia = parseFloat(prompt("Ingrese la distancia a recorrer en km: "))

if (peso > 5) {
    cargoPeso = (peso - 5) * 20
}

if (distancia > 50){
    cargoDistancia = (distancia - 50) * 10
}
costoTotal = costoBase + cargoPeso + cargoDistancia

var fecha = new Date()
var diasTransporte =  Math.ceil(distancia / 100)
var diasTotales = diasTransporte + 2
fecha.setDate(fecha.getDate() + diasTotales)

console.log("El costo base del envío es: L" + costoBase)
console.log("El cargo por peso es: L" + cargoPeso)
console.log("El cargo por distancia es: L" + cargoDistancia)
console.log("El costo total del envío es: L" + costoTotal)
console.log("La fecha estimada de entrega es: " + fecha.toLocaleDateString())