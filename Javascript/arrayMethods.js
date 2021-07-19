var articulos = [{
    nombre: 'Bici',
    costo: '4000',
}, {
    nombre: 'Horno',
    costo: '6000',
}, {
    nombre: 'Laptop',
    costo: '2000',
}]

/*map*/
var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});

/*find*/
var encuentraArticulos = articulos.find(function (articulo) {
    return articulo.nombre === "Horno";
});
/*foreach*/
/*
var foreachArticulos = articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});
/*some*/
var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 2000
});

console.log(articulosBaratos)