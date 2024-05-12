(function () {

    // --------------- Pavimentos ---------------- //

    function criarTerreo() {
        const janela = document.createElement('div')
        janela.classList.add('janela')

        const terreo = document.createElement('div')
        terreo.classList.add('terreo')
        terreo.setAttribute('andar', 't')
        terreo.appendChild(janela)

        return terreo
    }

    function criarAndar(numeroAndar) {
        const porta = document.createElement('div')
        porta.classList.add('porta')

        const andar = document.createElement('div')
        andar.classList.add('andar')
        andar.setAttribute('andar', numeroAndar)
        andar.appendChild(porta)

        return andar
    }

    function criarPavimentos() {
        const elementosComAndares = document.querySelectorAll('[andares]')
        elementosComAndares.forEach(el => {
            const qtde = +el.getAttribute('andares')
            for(let i = qtde; i > 0; i--) {
                el.appendChild(criarAndar(i))
            }
    
            el.appendChild(criarAndar())
        })
    }

    criarPavimentos()


    // --------------- Elevador ------------------ //

    function iniciarMovimentacao() {
        const elevador = document.querySelector('.elevador')
        elevador.setAttribute('em-movimentacao', '')
    }

    function finalizarMovimentacao() {
        const elevador = document.querySelector('.elevador')
        elevador.removeAttribute('em-movimentacao')
    }

    function emMovimentacao() {
        const elevador = document.querySelector('.elevador')
        return elevador.hasAttribute('em-movimentacao')
    }

    function obeterTamanhoElevador() {
        const terreo = document.querySelector('[andar="t"]')
        // console.log(terreo.clientHeight, terreo.offsetHeight)
        return terreo.offsetHeight
    }

    function criarElevador() {
        const poco = document.querySelector('.poco')

        const elevador = document.createElement('div')
        elevador.classList.add('elevador')
        elevador.style.height = obeterTamanhoElevador()

        poco.appendChild(elevador)
    }

    function obeterPosicaoAtual() {
        const elevador = document.querySelector('.elevador')
        return +elevador.style.bottom.replace('px', '')
    }

    function atualizarMostrador(texto) {
        const mostrador = document.querySelector('.mostrador')
        mostrador.innerHTML = texto
    }

    function comandoIniciado(comando) {
        const botao = document.querySelector(`[comando="${comando}"]`)
        botao.classList.add('destaque')
    }

    function comandoFinalizado(comando) {
        const botao = document.querySelector(`[comando="${comando}"]`)
        botao.classList.remove('destaque')
    }

    function moverElevadorPara(andar) {

        if(emMovimentacao()) return

        iniciarMovimentacao()
        comandoIniciado(andar)

        const numero = andar === 't' ? 0 : +andar
        const elevador = document.querySelector('.elevador')

        const posicaoInicial = obeterPosicaoAtual()
        const posicaoFinal = numero * obeterTamanhoElevador()
        const subindo = posicaoFinal > posicaoInicial

        atualizarMostrador(subindo ? 'Subindo' : `Descendo`)

        let temporizador = setInterval(() => {
            const posicaoAtual = obeterPosicaoAtual() + (subindo ? 10 : -10)
            const terminou = subindo ? posicaoAtual >= posicaoFinal : posicaoAtual <= posicaoFinal
            elevador.style.bottom = terminou ? posicaoFinal : posicaoAtual

            if(terminou){
                clearInterval(temporizador)
                atualizarMostrador(andar === 't' ? 'Térreo' : `${andar} Andar`)
                finalizarMovimentacao()
                comandoFinalizado(andar)
            }
        }, 30)

    }

    function aplicarMovimentacaoElevador() {
        const botoes = document.querySelectorAll('[comando]')
        botoes.forEach(botao => {
            const comando = botao.getAttribute('comando')
            botao.onclick = function() {
                moverElevadorPara(comando)
            }
        })
    }

    criarElevador()
    aplicarMovimentacaoElevador()

})()