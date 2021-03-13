const criarTarefa = (event) => {
	event.preventDefault()
	const input = document.querySelector('[data-form-input]')
	console.log(input.value)
	input.value = ""
}
const novatarefa = document.querySelector('[data-form-button]')
novatarefa.addEventListener('click', criarTarefa)
