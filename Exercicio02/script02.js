function calcularIngredientes() {
    let quantidadePessoas = parseInt(document.getElementById("inputQuantidadePessoas").value);
    
    let ovos = quantidadePessoas * 2;
    let queijo = quantidadePessoas * 50;

    document.getElementById("resultadoOvos").innerText = "Ovos necessários: " + ovos;
    document.getElementById("resultadoQueijo").innerText = "Queijo necessário: " + queijo + " gramas";
}
