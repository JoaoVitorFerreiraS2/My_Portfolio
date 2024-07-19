console.log('Estamos trabalhando...')

mudanca = true

const descricao = document.getElementById('acao');
let checkbox = document.getElementById('checkboxID')


checkbox.addEventListener('click', verificarTrueOrFalse)

verificar()

function verificarTrueOrFalse(){
	if(mudanca == true){
		mudanca = false
		verificar()
		console.log(mudanca)
	} else if (mudanca == false){
		mudanca = true
		verificar()
		console.log(mudanca)
	}
}

function verificar() {
	let apresentacao = document.getElementById('h1_apresentacao');
	if (mudanca == true) {
		apresentacao.innerHTML = 'Olá, meu nome é João Vitor <br> e sou desenvolvedor Back-End';
	} else if (mudanca == false){
		apresentacao.innerHTML = 'Olá, meu nome é João Vitor <br> e sou Analista de TI'
	}
}

function typeWrite(elemento) {
	const textoArray = elemento.inner.split('');
	elemento.innerHTML = ' ';
	textoArray.forEach(function (letra, i) {

		setTimeout(function () {
			elemento.innerHTML += letra;
		}, 25 * i)

	});
}


typeWrite(descricao);

let theme = localStorage.getItem('theme')

if (theme == null) {
	setTheme('light')
} else {
	setTheme(theme)
}

let temas = document.getElementsByClassName('theme-dot')

for (var i = 0; temas.length > i; i++) {
	temas[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		console.log('Opções de cliques:', mode)
		setTheme(mode)
	})
}

function setTheme(mode) {
	if (mode == 'light') {
		document.getElementById('theme-style').href = 'default.css'
	}

	if (mode == 'blue') {
		document.getElementById('theme-style').href = 'blue.css'
	}

	if (mode == 'green') {
		document.getElementById('theme-style').href = 'green.css'
	}

	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}
