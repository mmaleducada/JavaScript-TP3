let lado1 = parseFloat(prompt("Ingrese el valor del lado 1:"));
let lado2 = parseFloat(prompt("Ingrese el valor del lado 2:"));

function calcularPerimetroRectangulo(lado1, lado2) {
    let perimetro = 2 * (lado1 + lado2);
    return perimetro;
}

let perimetro = calcularPerimetroRectangulo(lado1, lado2);

console.log(`El perímetro del rectángulo es: ${perimetro}`);