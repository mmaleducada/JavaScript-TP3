function mostrarTipoDeCadena (cadena) {
    if (cadena === cadena.toUpperCase()) {
        console.log("La frase esta en mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
        console.log("La frase esta en minúsculas")
    } else {
        console.log("La frase tiene mayúsculas y minúsculas");
    }
    return;
} 