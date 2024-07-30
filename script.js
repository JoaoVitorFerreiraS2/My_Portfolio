document.addEventListener('DOMContentLoaded', function() {
    console.log('Estamos trabalhando...')

    let mudanca = true

    const descricao = document.getElementById('acao');
    let checkbox = document.getElementById('checkboxID')

    checkbox.addEventListener('click', verificarTrueOrFalse)

    verificar()

    function verificarTrueOrFalse(){
        mudanca = !mudanca; // Alterna o valor de 'mudanca'
        verificar()
        console.log(mudanca)
    }

    function verificar() {
        let apresentacao = document.getElementById('h1_apresentacao');
        if (mudanca) {
            apresentacao.innerHTML = 'Olá, meu nome é João Vitor <br> e sou desenvolvedor Back-End';
        } else {
            apresentacao.innerHTML = 'Olá, meu nome é João Vitor <br> e sou Analista de TI'
        }
    }

    function typeWrite(elemento) {
        const textoArray = elemento.innerHTML.split(''); // Corrige 'inner' para 'innerHTML'
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
        const themeStyle = document.getElementById('theme-style');
        if (!themeStyle) {
            console.error('Elemento de estilo de tema não encontrado!');
            return;
        }

        if (mode == 'light') {
            themeStyle.href = 'default.css'
        } else if (mode == 'blue') {
            themeStyle.href = 'blue.css'
        } else if (mode == 'green') {
            themeStyle.href = 'green.css'
        } else if (mode == 'purple') {
            themeStyle.href = 'purple.css'
        } else if (mode == 'black'){
			themeStyle.href = 'black.css'
		}

        localStorage.setItem('theme', mode)
    }
});
