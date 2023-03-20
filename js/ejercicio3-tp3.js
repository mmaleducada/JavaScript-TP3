let resultados = new Array(11).fill(0);

for (let i = 0; i < 50; i++) {

    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    let suma = dado1 + dado2;

    resultados[suma - 2]++;
}

for (let i = 0; i < resultados.length; i++) {
    console.log(`La suma ${i + 2} apareció ${resultados[i]} veces.`);
}
