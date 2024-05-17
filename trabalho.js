function Enviar() {
// função Enviar() que recebe o nome e gera um alerta confirmando o envio
    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert('Obrigado ' + nome.value + ' sua mensagem foi com sucesso');
    }

}

function upperCase() {
// função upperCase que transforma letras digitadas em Nome em maiúculas
    const x = document.getElementById("nome");
    x.value = x.value.toUpperCase();
}

