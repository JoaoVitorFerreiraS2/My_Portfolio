console.log('Estamos trabalhando...')

const titulo = document.getElementById('acao');

function typeWrite(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = ' ';
	textoArray.forEach(function (letra, i) {

		setTimeout(function () {
			elemento.innerHTML += letra;
		}, 25 * i)

	});
}


typeWrite(titulo);

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
