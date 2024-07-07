
function habilitarBotaoOculto() {
    // Seleciona o botão oculto pelo ID
    var copia = document.getElementById('copia');
    // Remove o atributo 'hidden' para exibir o botão
    copia.hidden = false;
}

function ocultarImagem() {
    // Seleciona o botão oculto pelo ID
    var boneco = document.getElementById('boneco');
    // adiciona o atributo para ocultar a imagem
    boneco.hidden = true;
}

function habilitarBotaoOculto() {
    // Seleciona o botão oculto pelo ID
    var copia = document.getElementById('copia');
    // Remove o atributo 'hidden' para exibir o botão
    copia.hidden = false;
}

function ocultarTexto() {
    var neno = document.getElementById('neno');
    neno.hidden = true;
    var bobo = document.getElementById('bobo');
    bobo.hidden = true;
}



function criptog() {
    let texto1 = document.getElementById('inputdoinput').value
    let textocrip = criptografar(texto1);
    habilitaroutput();
    outputnolugar(textocrip);
    habilitarBotaoOculto();
    ocultarImagem();
    ocultarTexto();
    limparcampo();
}

function outputnolugar(textocript) {
    var nome = textocript;
    var output = document.getElementById('output');
    output.textContent = nome;
}

function limparcampo() {
    var input = document.getElementById('inputdoinput');
        input.value = "";
}



function criptografar(texto) {
    if (!verificarTexto(texto)) {
        return null; // Saia da função se o texto não for válido
    }
            // Definindo as substituições
        const substituicoes = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
    
        // Substituindo as letras conforme a orientação
        let textoCriptografado = texto.replace(/[eioua]/g, function(matched){
            return substituicoes[matched];
        });
        return textoCriptografado;
}

function descriptog() {
    let texto1 = document.getElementById('inputdoinput').value
    let textodescrip = descriptografar(texto1);
    habilitaroutput();
    outputnolugar(textodescrip);
    habilitarBotaoOculto();
    ocultarImagem();
    ocultarTexto();
    limparcampo();
}

function descriptografar(texto) {
    if (!verificarTexto(texto)) {
        return null; // Saia da função se o texto não for válido
    }
    // Definindo as substituições
    const substituicoes = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Substituindo as letras conforme a orientação
    let textoDescriptografado = texto.replace(/enter|imes|ober|ufat|ai/g, function(matched){
        return substituicoes[matched];
    });

    return textoDescriptografado;
}

function habilitaroutput() {
    // Seleciona o botão oculto pelo ID
    var output = document.getElementById('output');
    // Remove o atributo 'hidden' para exibir o botão
    output.hidden = false;
}


function copiar(){
    var copiado = document.getElementById('output');
    navigator.clipboard.writeText(copiado.textContent);
}

function verificarTexto(texto) {
    var caracteres = texto.split('');
    var valido = true;
    for (var i = 0; i < caracteres.length; i++) {
        var codigo = caracteres[i].charCodeAt(0);
        if ((codigo < 97 || codigo > 122) && codigo !== 32) { // Inclui espaço como válido
            valido = false;
            break;
        }
    }
    if (!valido) {
        alert("A string contém caracteres inválidos. Por favor, insira apenas letras minúsculas e espaços sem caracteres especiais.");
    }
    return valido;
}

