window.onload = function () {
    let elementoP = document.getElementsByTagName("p")

    function mudaFundo() {
        let divCorFundo = document.getElementById("cor de fundo")
        divCorFundo.addEventListener("change", mudaCor)
        function mudaCor() {
            let cor = divCorFundo.value
            let corAlterada = document.body.style.backgroundColor = cor

            localStorage.setItem("corFundo", JSON.stringify(corAlterada))

        }
    }
    mudaFundo()

    let corSalva = localStorage.getItem("corFundo")
    let corSalvaParse = JSON.parse(corSalva)
    if (corSalva !== null) {
        document.body.style.backgroundColor = corSalvaParse
    }

    function mudaTexto() {
        let divCorTexto = document.getElementById("cor de texto")
        let elementoP = document.getElementsByTagName("p")
        divCorTexto.addEventListener("change", mudaCor)
        function mudaCor() {
            let cor = divCorTexto.value
            localStorage.setItem("corTexto", JSON.stringify(cor))
            for (let index = 0; index < elementoP.length; index += 1) {
                elementoP[index].style.color = cor
            }
        }
    }
    mudaTexto();

    let corSalvaTexto = localStorage.getItem("corTexto")
    let corSalvaTextoParse = JSON.parse(corSalvaTexto)
    if (corSalvaTexto !== null) {
        for (let index = 0; index < elementoP.length; index += 1) {
            elementoP[index].style.color = corSalvaTextoParse
        }
    }

    function mudaTamanhoTexto() {
        let elementoP = document.getElementsByTagName("p");
        let divInputTamanho = document.getElementById("fonteTamanho");
        let divBotao = document.getElementById("send")
        divBotao.addEventListener("click", mudaTamanho)
        function mudaTamanho() {
            let valorNumero = divInputTamanho.value
            for (let index = 0; index < elementoP.length; index += 1) {
                let textoTamanho = elementoP[index].style.fontSize = valorNumero + "px"
                localStorage.setItem("tamanhoTexo", JSON.stringify(textoTamanho))
            }

        }
    }
    mudaTamanhoTexto();

    let salvoTamanhoTexto = localStorage.getItem("tamanhoTexo")
    let salvoTamanhoTextoParse = JSON.parse(salvoTamanhoTexto)
    if (salvoTamanhoTexto !== null) {
        for (let index = 0; index < elementoP.length; index += 1) {
            elementoP[index].style.fontSize = salvoTamanhoTextoParse
        }
    }

    function espacoLinhas() {
        let elementoP = document.getElementsByTagName("p");
        let divInputTamanho = document.getElementById("linhasEspaco");
        let divBotao = document.getElementById("enviar")
        divBotao.addEventListener("click", mudaTamanho)
        function mudaTamanho() {
            let valorNumero = divInputTamanho.value
            for (let index = 0; index < elementoP.length; index += 1) {
                let linhaEspaco = elementoP[index].style.lineHeight = valorNumero + "px"
                localStorage.setItem("espacoLinha", JSON.stringify(linhaEspaco))
            }
        }
    }
    espacoLinhas()

    let salvoEspacoLinhas = localStorage.getItem("espacoLinha")
    let salvoEspacoLinhasParse = JSON.parse(salvoEspacoLinhas)
    if (salvoEspacoLinhas !== null) {
        for (let index = 0; index < elementoP.length; index += 1) {
            elementoP[index].style.lineHeight = salvoEspacoLinhasParse
        }
    }

    function tipoFonte() {
        let elementoP = document.getElementsByTagName("p");
        let divInputTipo = document.getElementById("fonteTipo");
        divInputTipo.addEventListener("change", mudaTipo)
        function mudaTipo() {
            for (let index = 0; index < elementoP.length; index += 1) {
                let fonteSelecionado = divInputTipo.selectedOptions[0]
                let tipoFonte = elementoP[index].style.fontFamily = fonteSelecionado.value
                localStorage.setItem("fonteTipo", JSON.stringify(tipoFonte))
            }
        }
    }
    tipoFonte();

    let salvoTipoFonte = localStorage.getItem("fonteTipo")
    let salvoTipoFonteParse = JSON.parse(salvoTipoFonte)
    if (salvoTipoFonte !== null) {
        for (let index = 0; index < elementoP.length; index += 1) {
            elementoP[index].style.fontFamily = salvoTipoFonteParse
        }
    }
}