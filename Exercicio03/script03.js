function calcularOperacoes() {
    var num1 = parseInt(document.getElementById("inputNum1").value);
    var num2 = parseInt(document.getElementById("inputNum2").value);
    
    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var multiplicacao = num1 * num2;
    var divisao = num1 / num2;

    document.getElementById("resultadoSoma").innerText = "Soma: " + soma;
    document.getElementById("resultadoSubtracao").innerText = "Subtração: " + subtracao;
    document.getElementById("resultadoMultiplicacao").innerText = "Multiplicação: " + multiplicacao;
    document.getElementById("resultadoDivisao").innerText = "Divisão: " + divisao;
}