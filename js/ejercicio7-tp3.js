const filas = 11;
let numero = parseInt(prompt("Ingrese un numero"));

document.write('<table><tbody>')
for (let multiplicando = 1; multiplicando < filas; multiplicando++) {
    let resultado = numero * multiplicando;
    document.write('<tr>')
    document.write(`<td>${numero}</td>`)
    document.write(`<td>x</td>`)
    document.write(`<td>${multiplicando}</td>`)
    document.write(`<td>=</td>`)
    document.write(`<td>${resultado}</td>`)
    document.write('</tr>')
}
document.write('</tbody></table>')