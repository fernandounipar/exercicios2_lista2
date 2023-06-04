function calcularTurmas() {
    var numAlunos = parseInt(document.getElementById("inputAlunos").value);
    var numTurmas = parseInt(document.getElementById("inputTurmas").value);
    
    var pessoasPorTurma = Math.floor(numAlunos / numTurmas);
    var pessoasSemTurma = numAlunos % numTurmas;
    
    document.getElementById("resultadoNove").innerText = "Pessoas por turma: " + pessoasPorTurma + "\n" +
                                                     "Pessoas sem turma: " + pessoasSemTurma;
}
