// let n = prompt()
// let soma = 0
// let lista = 0
// for (let index = 0; index < n; index++) {
//     lista = lista + 2
//     soma = soma + lista
//     document.write(lista+"<br>")
// }
// document.write("<br> SOMA =" + soma)
// n(n+1)




let maior = undefined
let menor = undefined
let novaNota = function (nome,nota) {
    tabela.style.display ="table"
    maior_menor.style.display = "inline"
    tabela.innerHTML += `<tr><td>${nome}</td><td>${nota}</td></tr>`
    if (maior < nota || maior == undefined) maior = nota
    if (menor > nota || menor == undefined) menor = nota
    nota_maior.innerHTML = `${maior}`
    nota_menor.innerHTML = `${menor}`
}