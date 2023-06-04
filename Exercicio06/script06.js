function verificarNota() {
    var nota = parseFloat(document.getElementById("inputNota").value);
    
    if (nota < 6 && nota > 4) {
        document.getElementById("resultado6").innerText = "Precisa fazer prova substitutiva";
    } else if (nota >= 6) {
        document.getElementById("resultado6").innerText = "Aprovado";
    } else {
        document.getElementById("resultado6").innerText = "Reprovado";
    }
}
