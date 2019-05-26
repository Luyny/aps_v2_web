//Exercicio 1 - SOMA
novaSoma = function (n) {
    if (n < 0) {
        alerta.innerHTML = ` 
        <div class="ml-2 alert alert-danger float-left position-absolute w-25">        
        Insira um número válido
        </div>`
        setTimeout(() => alerta.innerHTML = '', 2000)
    } else {
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
}
//Exercicio 2 - NOTAS
let maior = undefined
let menor = undefined
let novaNota = function (nome, nota) {
    if (nota == '' || nota < 0 || nota > 10 || nome == '') {
        nomeForm.value = ''
        notaForm.value = ''
        alerta.innerHTML = ` 
        <div class="ml-2 alert alert-danger float-left position-absolute w-25">        
            Preencha corretamente todos os campos e tente novamente
        </div>`
        setTimeout(() => alerta.innerHTML = '', 2000)
    }
    else if (nome != '' && nota >= 0 && nota <= 10) {
        tabela.style.display = "table"
        maior_menor.style.display = "inline"
        tabela.innerHTML += `<tr><td>${nome}</td><td>${nota}</td></tr>`
        if (maior < nota || maior == undefined) maior = nota
        if (menor > nota || menor == undefined) menor = nota
        nota_maior.innerHTML = maior
        nota_menor.innerHTML = menor
    }
}