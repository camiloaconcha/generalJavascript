function auto(MARCA, MODELO, ANNIO) {
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}
var autos = [];
for (let I = 0; I < 5; I++) {
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto(marca, modelo, annio));
}

for (let I = 0; I < autos.length; I++) {
    console.log(autos[I]);
}