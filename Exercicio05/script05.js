function verificarIdades() {
    var nome1 = document.getElementById("inputNome1").value;
    var ano1 = parseInt(document.getElementById("inputAno1").value);
    
    var nome2 = document.getElementById("inputNome2").value;
    var ano2 = parseInt(document.getElementById("inputAno2").value);
    
    var nome3 = document.getElementById("inputNome3").value;
    var ano3 = parseInt(document.getElementById("inputAno3").value);
    
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    
    var idade1 = anoAtual - ano1;
    var idade2 = anoAtual - ano2;
    var idade3 = anoAtual - ano3;
    
    var resultado = "Pessoa mais velha: " + obterNomeMaisVelha(nome1, nome2, nome3, idade1, idade2, idade3) + " - " + obterIdadeMaisVelha(idade1, idade2, idade3) + " anos";
    resultado += "<br>Segunda pessoa mais velha: " + obterNomeSegundaMaisVelha(nome1, nome2, nome3, idade1, idade2, idade3) + " - " + obterIdadeSegundaMaisVelha(idade1, idade2, idade3) + " anos";
    resultado += "<br>Terceira pessoa mais velha: " + obterNomeTerceiraMaisVelha(nome1, nome2, nome3, idade1, idade2, idade3) + " - " + obterIdadeTerceiraMaisVelha(idade1, idade2, idade3) + " anos";

    document.getElementById("resultadoCinco").innerHTML = resultado;
}

function obterNomeMaisVelha(nome1, nome2, nome3, idade1, idade2, idade3) {
    if (idade1 >= idade2 && idade1 >= idade3) {
        return nome1;
    } else if (idade2 >= idade1 && idade2 >= idade3) {
        return nome2;
    } else {
        return nome3;
    }
}

function obterIdadeMaisVelha(idade1, idade2, idade3) {
    return Math.max(idade1, idade2, idade3);
}

function obterNomeSegundaMaisVelha(nome1, nome2, nome3, idade1, idade2, idade3) {
    var nomes = [nome1, nome2, nome3];
    var idades = [idade1, idade2, idade3];
    
    var segundaMaisVelhaIndex = idades.indexOf(obterIdadeSegundaMaisVelha(idade1, idade2, idade3));
    
    return nomes[segundaMaisVelhaIndex];
}

function obterIdadeSegundaMaisVelha(idade1, idade2, idade3) {
    var idades = [idade1, idade2, idade3];
    idades.sort(function(a, b) {
        return b - a;
    });
    
    return idades[1];
}

function obterNomeTerceiraMaisVelha(nome1, nome2, nome3, idade1, idade2, idade3) {
    if (idade1 <= idade2 && idade1 <= idade3) {
        return nome1;
    } else if (idade2 <= idade1 && idade2 <= idade3) {
        return nome2;
    } else {
        return nome3;
    }
}

function obterIdadeTerceiraMaisVelha(idade1, idade2, idade3) {
    return Math.min(idade1, idade2, idade3);
}
