var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];
	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaAltura(altura);
	var alturaEhValido = validaPeso(peso);

	if (!pesoEhValido) {
		tdImc.textContent = "Peso inválido!";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEhValido) {
		tdImc.textContent = "Altura inválida!";
		alturaEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValido)
		tdImc.textContent = calculaImc(peso, altura);
}

function calculaImc(peso, altura) {
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso) {
	if (peso >= 0 && peso <= 1000)
		return true;
	return false;
}

function validaAltura(altura) {
	if (altura >= 0 && altura <= 3.00)
		return true;
	return false;
}