function calcularAtingimentoMetas() {
    var valorVendido = parseFloat(document.getElementById("inputVendido").value);
    var meta = parseFloat(document.getElementById("inputMeta").value);
    var metaMinima = parseFloat(document.getElementById("inputMetaMinima").value);
    
    var percentualMeta = (valorVendido / meta) * 100;
    var percentualMetaMinima = (valorVendido / metaMinima) * 100;
    
    var resultado = "";
    
    if (valorVendido >= meta) {
        resultado += "Atingiu a meta.";
    } else {
        resultado += "Não atingiu a meta.";
    }
    
    resultado += "\n";
    
    if (valorVendido >= metaMinima) {
        resultado += "Atingiu a meta mínima.";
    } else {
        resultado += "Não atingiu a meta mínima.";
    }
    
    resultado += "\n";
    
    resultado += "Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%\n";
    resultado += "Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%";
    
    document.getElementById("resultadoDez").innerText = resultado;
}
