var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];
	var peso = paciente.querySelector(".info-peso").textContent;
	var altura = paciente.querySelector(".info-altura").textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var imc = peso / (altura * altura);

	var pesoEhValido = true;
	var alturaEhValido = true;

	if (peso <= 0 || peso >= 1000) {
		tdImc.textContent = "Peso inválido!";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 3.00) {
		tdImc.textContent = "Altura inválida!";
		alturaEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (pesoEhValido && alturaEhValido)
		tdImc.textContent = imc.toFixed(2);
}

var botadoAdicionar = document.querySelector("#adicionar-paciente");
botadoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();
	var form = document.querySelector("#form-adiciona");

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);
});