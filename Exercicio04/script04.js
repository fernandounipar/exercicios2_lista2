function calcularPedido() {
    var sabor1 = document.getElementById("inputSabor1").value;
    var sabor2 = document.getElementById("inputSabor2").value;
    var sabor3 = document.getElementById("inputSabor3").value;
    var sabor4 = document.getElementById("inputSabor4").value;
    var quantidadeRefri = parseInt(document.getElementById("inputQuantidadeRefri").value);
    
    var valorPizza = 57.00;
    var valorRefri = 7.00;
    
    var totalPizza = valorPizza;
    var totalRefri = valorRefri * quantidadeRefri;
    var totalPagar = totalPizza + totalRefri;
    
    var saboresEscolhidos = "Sabores escolhidos: " + sabor1 + ", " + sabor2 + ", " + sabor3 + ", " + sabor4;
    var valorTotal = "Valor total a pagar: R$ " + totalPagar.toFixed(2);

    document.getElementById("resultadoSabores").innerText = saboresEscolhidos;
    document.getElementById("resultadoValor").innerText = valorTotal;
}
