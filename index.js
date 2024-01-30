function validarTexto() {
    let paragrafo = document.getElementById("paragrafo");
    let campoTexto = document.querySelector("#texto");
    let valorCampo = campoTexto.value
    let validador = /[^a-z\s]/;

    if (validador.test(valorCampo)) {
        paragrafo.textContent = "ERROR: O texto não deve conter letras maiúsculas, acentos ou caracteres especiais!";
        alert('ERROR: O texto não deve conter letras maiúsculas, acentos ou caracteres especiais!');
        campoTexto.value = '';
        console.log(campoTexto);
    }
}

function encriptar() {
    let texto = document.getElementById("texto").value
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textContent = "Texto criptografado com êxito.";
        paragrafo.textContent = "";
        boneco.src = "./img/viper.gif";
    } else {
        boneco.src = "./img/viper2.gif";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Você precisa digitar a mensagem ao lado e em seguida clicar em criptografar ou descriptografar.";

    }

}

function desencriptar() {
    let texto = document.getElementById("texto").value
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textContent = "Texto descriptografado com êxito.";
        paragrafo.textContent = "";
        boneco.src = "./img/viper.gif"
    } else {
        boneco.src = "./img/viper2.gif"
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Você precisa digitar a mensagem ao lado e em seguida clicar em criptografar ou descriptografar.";

    }
}

function copiar() {
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");
    let copyText = document.getElementById("texto");
    navigator.clipboard.writeText(copyText.value)
    paragrafo.textContent = "Mensagem copiada para área de transferêcia com sucesso.";
    boneco.src = "./img/viper5.gif"
}