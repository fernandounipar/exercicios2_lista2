function compararNumeros() {
    var num1 = parseInt(document.getElementById("inputNum1").value);
    var num2 = parseInt(document.getElementById("inputNum2").value);
    
    if (num1 > num2) {
        document.getElementById("resultado7").innerText = "O primeiro número é maior que o segundo.";
    } else if (num1 < num2) {
        document.getElementById("resultado7").innerText = "O primeiro número é menor que o segundo.";
    } else {
        document.getElementById("resultado7").innerText = "O primeiro número é igual ao segundo.";
    }
}
