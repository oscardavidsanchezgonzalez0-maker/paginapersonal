const empresaVideoJuegos = ["Nintendo", "Sega", "Sony", "Microsoft", "Atari"];

// Mostrar el primer valor del Array
function mostrarValor1() {
    document.getElementById("valor1").innerText = "El primer valor del Array es: " + empresaVideoJuegos[0] + ".";
}

// Añadir un valor al final del Array
function anadirValorFinal() {
    let nombreEmpresa = document.getElementById("nempresa").value;
    empresaVideoJuegos.push(nombreEmpresa);
    console.log(empresaVideoJuegos[5]);
}

// Eliminar el segundo valor del Array
function eliminarValor2() {
    empresaVideoJuegos.splice(1, 1);
    console.log(empresaVideoJuegos[1]);
}

// Mostrar el resultado final del Array
function mostrarResultadoFinal() {
    document.getElementById("ResultadoFinal").innerText = "Los valores del Array son: " + empresaVideoJuegos.toString() + ".";
}

//Alternativa a mostrar el resultado final del Array
/*function mostrarResultadoFinal() {
    let pantalla = "";

    for (let i = 0; i < empresaVideoJuegos.length; i++) {
        pantalla += empresaVideoJuegos[i];

        if (i < empresaVideoJuegos.length - 1) {
            pantalla += ", ";
        }
    }
    document.getElementById("ResultadoFinal").innerText = "Los valores del Array son: " + pantalla + ".";
}*/