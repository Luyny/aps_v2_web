// let n = prompt()
// let soma = 0
// let lista = 0
// for (let index = 0; index < n; index++) {
//     lista = lista + 2
//     soma = soma + lista
//     document.write(lista+"<br>")
// }
// document.write("<br> SOMA =" + soma)




let display = true
let maior = undefined
let menor = undefined

novaNota = function (nome,nota) {
    if (display) {
        table.innerHTML = `<table border="1" class="table mt-2" id="tabela"><tr><th>Nome</th><th>Nota</th></tr></table>`
        display = false
    }
    tabela.innerHTML += `<tr><td>${nome}</td><td>${nota}</td></tr>`
    if (maior < nota || maior == undefined) maior = nota

    if (menor > nota || menor == undefined) menor = nota

    nota_maior.innerHTML = `${maior}`
    nota_menor.innerHTML = `${menor}`
}