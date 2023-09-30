//EJERCICIO 1
var pesoAlumnos = [];
var Menos40kg = 0;
var Entre40y50kg = 0;
var Mas50yMenos60kg = 0;
var Mas60kg = 0;

function agrPeso() {
    var peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(peso)) {
        alert("Por favor, introduce un valor válido para el peso.");
        return;
    }

    pesoAlumnos.push(peso);
    actPorcentajes();
    limpCampo();
}

function actPorcentajes() {
    var totalAlumnos = pesoAlumnos.length;

    var contadorMenos40kg = 0;
    var contadorEntre40y50kg = 0;
    var contadorMas50yMenos60kg = 0;
    var contadorMas60kg = 0;

    for (let i = 0; i < totalAlumnos; i++) {
        if (pesoAlumnos[i] < 40) {
            contadorMenos40kg++;
        } else if (pesoAlumnos[i] >= 40 && pesoAlumnos[i] <= 50) {
            contadorEntre40y50kg++;
        } else if (pesoAlumnos[i] > 50 && pesoAlumnos[i] < 60) {
            contadorMas50yMenos60kg++;
        } else {
            contadorMas60kg++;
        }
    }

    porcentajeMenosDe40kg = (contadorMenos40kg / totalAlumnos) * 100;
    porcentajeEntre40y50kg = (contadorEntre40y50kg / totalAlumnos) * 100;
    contadorMas50yMenos60kg = (contadorMas50yMenos60kg / totalAlumnos) * 100;
    porcentajeMasDe60kg = (contadorMas60kg / totalAlumnos) * 100;

    document.getElementById("Menos40kg").textContent = porcentajeMenosDe40kg.toFixed(2) + "%";
    document.getElementById("Entre40-50kg").textContent = porcentajeEntre40y50kg.toFixed(2) + "%";
    document.getElementById("Mas50-Menos60kg").textContent = contadorMas50yMenos60kg.toFixed(2) + "%";
    document.getElementById("Mas60kg").textContent = porcentajeMasDe60kg.toFixed(2) + "%";
}

function limpCampo() {
    document.getElementById("peso").value = "";
}

//EJERCICIO 2
function calInteres() {

    var montoInicial = parseFloat(document.getElementById("montoInicial").value);
    var ingresoMensual = 250;
    var tasaInteresMensual = 0.0125;
    var montoAcumulado = montoInicial;

    for (let mes = 1; mes <= 12; mes++) {
        montoAcumulado += ingresoMensual;
        montoAcumulado += montoAcumulado * tasaInteresMensual;
    }

    var interesTotal = montoAcumulado - montoInicial;
    document.getElementById("Resultado").innerText = "El interés acumulado en final del año es: " + interesTotal.toFixed(2) + " Bs.";
}

//EJERCICIO 3
