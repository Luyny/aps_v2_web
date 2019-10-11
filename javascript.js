// Função para postar o conteudo
function postar(id, conteudo, adicionar) {
    if (!adicionar) id.innerHTML = conteudo
    if (adicionar) id.innerHTML += conteudo
}
// Função para indicar quando o valor inserido no campo esta incorreto
// deve ser inserido apenas o id do campo e a mensagem que deve aparecer
function valorIncorreto(id, mensagem) {
    //Guarda o valor anterior do placeholder
    let before = id.placeholder
    //limpa o campo, exibe a msg de erro e adiciona a cor
    id.value = ''
    id.placeholder = mensagem
    id.style.backgroundColor = '#ff00006e'
    // Remove a cor e volta com o valor anterior depois de 1,3 segundos
    setTimeout(() => {
        id.style.background = ''
        id.placeholder = before
    }, 1300)
}
//Exercicio 1 - SOMA
novaSoma = function (n) {
    // Se o valor for negativo exibe msg de erro
    if (n < 0) {
        valorIncorreto(numero, "Numero inválido")
    } else {
        let soma = 0
        // se o campo de numero for vazio limpa a tabela 
        if (n != '') {
            tabela.style.display = "table"
        } else {
            tabela.style.display = "none"
        }
        // Forma a tabela
        postar(tabela, `<tr class="thead-light "><th>N</th><th>Soma</th></tr>`, false)
        postar(tabela, `<tr><td> <b>${n}</br> </td> <td> <b> ${n * (n + 1)} </b> </td></tr>
                       <tr class="thead-light"><th colspan="2">Numeros pares</th></tr>`, true)
        for (let i = 0; i < n; i++) {
            soma = soma + 2
            postar(tabela, `<tr><td colspan="2">${soma}</td></tr>`, true)
        }
    }
}
//Exercicio 2 - NOTAS
var maior = undefined
var menor = undefined
let novaNota = function (nome, nota) {
    //Verifica se o valor inserido é valido e chama a funcao caso nao seja
    if (nome == '') valorIncorreto(nomeForm, "Nome Vazio")
    if (nota < 0 || nota > 100) valorIncorreto(notaForm, "Nota inválida")
    
    if (nome != '' && nota >= 0 && nota <= 100) {
        //Exibe a tabela que estava escondida
        tabela.style.display = "table"
        maior_menor.style.display = "inline"
        postar(tabela, `<tr><td>${nome}</td><td>${nota}</td></tr>`, true)
        //se for MAIOR que a nota armazenada como a MAIOR, substitui pela atual
        if (maior < nota || maior == undefined) maior = nota
        //se for MENOR que a nota armazenada como a MENOR, substitui pela atual
        if (menor > nota || menor == undefined) menor = nota
        // atualiza as notas maiores e menores
        postar(nota_maior, maior, false)
        postar(nota_menor, menor, false)
    }
}