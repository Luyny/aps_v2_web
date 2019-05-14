//Exercicio 1 - SOMA
novaSoma = function (n) {
    let soma = 0
    n != '' ? tabela.style.display = "table" : tabela.style.display = "none"
    tabela.innerHTML = ` <tr class="thead-light "><th>N</th><th>Soma</th></tr>`
    tabela.innerHTML += `<tr><td> <b>${n}</br> </td> <td> <b> ${n * (n + 1)} </b> </td></tr>`
    tabela.innerHTML += '<tr class="thead-light"><th colspan="2">Numeros pares</th></tr>'
    for (let i = 0; i < n; i++) {
        soma = soma + 2
        tabela.innerHTML += `<tr><td colspan="2">${soma}</td></tr>`
    }
}
//Exercicio 2 - NOTAS
let maior = undefined
let menor = undefined
let novaNota = function (nome, nota){
    tabela.style.display = "table"
    maior_menor.style.display = "inline"
    tabela.innerHTML += `<tr><td>${nome}</td><td>${nota}</td></tr>`
    if (maior < nota || maior == undefined) maior = nota
    if (menor > nota || menor == undefined) menor = nota
    nota_maior.innerHTML = maior
    nota_menor.innerHTML = menor
}