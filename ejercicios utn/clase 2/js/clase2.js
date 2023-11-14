function sumar() {
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    var resultado = operando1 + operando2;
    document.getElementById("resultado").textContent = resultado;
}

function restar() {
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    var resultado = operando1 - operando2;
    document.getElementById("resultado").textContent = resultado;
}

function multiplicar() {
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    var resultado = operando1 * operando2;
    document.getElementById("resultado").textContent = resultado;
}

function dividir() {
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    var resultado = operando1 / operando2;
    document.getElementById("resultado").textContent = resultado;
}

sumar();
restar();
multiplicar();
dividir();