function calcularValores() {
    let cotacaoDolar = parseFloat(document.getElementById("inputCotacao").value);
    let aumento1 = cotacaoDolar * 1.01;
    let aumento2 = cotacaoDolar * 1.02;
    let aumento5 = cotacaoDolar * 1.05;
    let aumento10 = cotacaoDolar * 1.1;

    document.getElementById("resultado1").innerText = "Aumento de 1%: " + aumento1.toFixed(2);
    document.getElementById("resultado2").innerText = "Aumento de 2%: " + aumento2.toFixed(2);
    document.getElementById("resultado5").innerText = "Aumento de 5%: " + aumento5.toFixed(2);
    document.getElementById("resultado10").innerText = "Aumento de 10%: " + aumento10.toFixed(2);
}

