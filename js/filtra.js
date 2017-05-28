var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function() {
	var pacientes = document.querySelectorAll(".paciente");
	filtraPacientes(pacientes, this.value);
});

function exibePaciente(paciente) {
	paciente.classList.remove("invisivel");
}

function ocultaPaciente(paciente) {
	paciente.classList.add("invisivel");
}

function percorrePacientes(pacientes, comportamento) {
	pacientes.forEach(function(paciente) {
		comportamento(paciente);
	});
}

function filtraPacientes(pacientes) {
	if (campoFiltro.value.length)
		percorrePacientes(pacientes, aplicaFiltro);
	else
		percorrePacientes(pacientes, exibePaciente);
}

function aplicaFiltro(paciente) {
	var tdNome = paciente.querySelector(".info-nome");
	var nome = tdNome.textContent;
	var expressao = new RegExp(campoFiltro.value, "i");

	if (expressao.test(nome))
		exibePaciente(paciente);
	else
		ocultaPaciente(paciente);
}