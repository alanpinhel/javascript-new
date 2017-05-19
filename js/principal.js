var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

var pesoEhValido = true;
var alturaEhValido = true;

if (peso <= 0 || peso >= 1000) {
	tdImc.textContent = "Peso inválido!";
	pesoEhValido = false;
}

if (altura <= 0 || altura >= 3.00) {
	tdImc.textContent = "Altura inválida!";
	alturaEhValido = false;
}

if (pesoEhValido && alturaEhValido)
	tdImc.textContent = imc;