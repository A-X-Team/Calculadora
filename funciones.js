var variable1;
var variable2;
var operacion;
function init() {


    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

//evento

    uno.onclick = function () {
        resultado.textContent = resultado.textContent + "1";

    }
    dos.onclick = function () {
        resultado.textContent = resultado.textContent + "2";

    }
    tres.onclick = function () {
        resultado.textContent = resultado.textContent + "3";

    }
    cuatro.onclick = function () {
        resultado.textContent = resultado.textContent + "4";

    }
    cinco.onclick = function () {
        resultado.textContent = resultado.textContent + "5";

    }
    seis.onclick = function () {
        resultado.textContent = resultado.textContent + "6";

    }
    siete.onclick = function () {
        resultado.textContent = resultado.textContent + "7";

    }
    ocho.onclick = function () {
        resultado.textContent = resultado.textContent + "8";

    }
    nueve.onclick = function () {
        resultado.textContent = resultado.textContent + "9";

    }
    cero.onclick = function () {
        resultado.textContent = resultado.textContent + "0"

    }
    reset.onclick = function () {
        resetear();
    }
    suma.onclick = function () {
        variable1 = resultado.textContent
        operacion = "+";
        limpiar();

    }
    resta.onclick = function () {
        variable1 = resultado.textContent
        operacion = "-";
        limpiar();

    }
    multiplicacion.onclick = function () {
        variable1 = resultado.textContent
        operacion = "*";
        limpiar();

    }
    division.onclick = function () {
        variable1 = resultado.textContent
        operacion = "/";
        limpiar();

    }
    igual.onclick = function () {
        variable2 = resultado.textContent
        resolver();
    }

}
function limpiar() {
    resultado.textContent = "";

}

function resetear() {
    resultado.textContent = "";
    variable1 = 0;
    variable2 = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch(operacion){
        case"+":
        res = parseFloat(variable1) + parseFloat(variable2);
        break;

        case"-":
        res = parseFloat(variable1) - parseFloat(variable2);
        break;

        case"*":
        res = parseFloat(variable1) * parseFloat(variable2);
        break;

        case"/":
        res = parseFloat(variable1) / parseFloat(variable2);
        break;
    }
    resetear();
    resultado.textContent = res;
}

