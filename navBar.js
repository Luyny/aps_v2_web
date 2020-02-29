// Arquivo contendo a navBar do site

// Determina qual a aba ativa pegando o valor colocado no html
if (navbar.innerHTML == '1') {
    var at1 = 'active border rounded'
}else {
    var at2 = 'active border rounded'
}

// NavBar
navbar.innerHTML = `<nav id="nav" class="navbar navbar-dark navbar-expand-md mb-2 py-1 px-2">
<a class="navbar-brand m-auto " href="index.html"><img src="img/redentor1.png" width="125" height="30"></a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
    aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarToggler">
    <div class="navbar-text mr-auto pl-4 d-none d-lg-block"> APS 2 Projeto de Sistemas em Internet I</div>
    <div class="nav-item dropdown m-auto">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">Luyny Fernandes
            Faria - 1801957</a>
        <div class="dropdown-menu ml-5">
            <a class="dropdown-item" target="_blank" href="https://instagram.com/luyny_f"><img
                    src="img/instagram.png" width="20"> Instagram</a>
            <a class="dropdown-item" href="mailto:luynyfaria@gmail.com"><img src="img/gmail.png" width="20"
                    ></img>
                E-mail</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" target="_blank" href="https://github.com/luyny"><img src="img/github.png"
                    width="20"></img> GitHub </a>
        </div>
    </div>
    <div class="ml-auto">
        <ul class=" navbar-nav">
            <li class="nav-item ">
                <a class="nav-link ${at1}" href="./index.html">Atividade 1</a>
            </li>
            <li class="nav-item ${at2}">
                <a class="nav-link" href="./atividade2.html">Atividade 2</a>
            </li>
        </ul>
    </div>
</div>
</nav>`
