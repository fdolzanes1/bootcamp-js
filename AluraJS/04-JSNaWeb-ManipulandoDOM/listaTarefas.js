const criarTarefa = (event) => {
	event.preventDefault()
	const lista = document.querySelector('[data-list]')
	const input = document.querySelector('[data-form-input]')
	const valor = input.value

	const tarefa = document.createElement('li')
	tarefa.classList.add('task')
	const conteudo = `<p class="content">${valor}</p>`
	
	tarefa.innerHTML = conteudo
	tarefa.appendChild(botaoConcluir())
	tarefa.appendChild(botaoRemover())
	lista.appendChild(tarefa)
	input.value = ""
}
const novatarefa = document.querySelector('[data-form-button]')
novatarefa.addEventListener('click', criarTarefa)

const botaoConcluir = () => {
	const botaoConclui = document.createElement('button')
	botaoConclui.classList.add('check-button')
	botaoConclui.innerHTML = 'Done'
	botaoConclui.addEventListener('click', concluirTarefa)
	return botaoConclui
}

const botaoRemover = () => {
	const botaoRemovi = document.createElement('button')
	botaoRemovi.classList.add('delete-button')
	botaoRemovi.innerHTML = 'Delete'
	botaoRemovi.addEventListener('click', removerTarefa)
	return botaoRemovi
}

const concluirTarefa = (event) => {
	const botaoConclui = event.target
	const tarefaCompleta = botaoConclui.parentElement
	tarefaCompleta.classList.toggle('done')

}

const removerTarefa = (event) => {
	const botaoRemover = event.target
	const tarefaRemovida = botaoRemover.parentElement
	tarefaRemovida.classList.remove('list')

}
