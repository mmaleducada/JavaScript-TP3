let listaCiudades = [];

do {
    let ciudad = prompt("Introduce una ciudad");

    listaCiudades.push(ciudad);
} while (confirm("Desea continuar?"));
{
    console.log(listaCiudades);
    console.log(listaCiudades.length);

}
console.log("Posición primera: " + listaCiudades[0]);
console.log("Posición tercera: " + listaCiudades[2]);
console.log("Posición ultima: " + listaCiudades[listaCiudades.length - 1]);

listaCiudades.push("Paris");
console.log(listaCiudades);

document.write(listaCiudades[1]);

listaCiudades[1] = "Barcelona";
console.log(listaCiudades);