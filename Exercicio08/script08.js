function verificarParidade() {
    var numero = parseInt(document.getElementById("inputNumero").value);
    
    if (numero % 2 === 0) {
        document.getElementById("resultadoOito").innerText = "O número é Par.";
    } else {
        document.getElementById("resultadoOito").innerText = "O número é Ímpar.";
    }
}
