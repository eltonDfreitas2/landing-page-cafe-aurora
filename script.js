console.log("Café Aurora - script carregado!");

const nomeCafe = "Café Aurora";
const anoFundacao = 2020;
const anoAtual = new Date().getFullYear();
const anosDeCasa = anoAtual - anoFundacao;

const cardapio = [
    { nome: "Espresso", preco: 7, categoria: "cafe", descricao: "Café curto e intenso, com crema aveludada." },
    { nome: "Cappuccino", preco: 12, categoria: "cafe", descricao: "Espresso, leite vaporizado e espuma cremosa." },
    { nome: "Pão na chapa", preco: 8, categoria: "comida", descricao: "Pão artesanal na manteiga." },
    { nome: "Bolo do dia", preco: 10, categoria: "comida", descricao: "Fatia generosa feita na nossa cozinha." },
    { nome: "Croissant", preco: 14, categoria: "comida", descricao: "Folhado amanteigado assado na hora." }
];

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

const grade = document.querySelector(".cardapio__grade");

function criarCard(item) {
    const article = document.createElement("article");
    article.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.classList.add("card__titulo");
    titulo.textContent = item.nome;

    const descricao = document.createElement("p");
    descricao.classList.add("card__descricao");
    descricao.textContent = item.descricao;

    const preco = document.createElement("span");
    preco.classList.add("card__preco");
    preco.textContent = formatarPreco(item.preco);

    article.append(titulo, descricao, preco);
    return article;
}

function renderizarCardapio(itens) {
    if (grade) {
        grade.innerHTML = "";
        itens.forEach((item) => {
            grade.append(criarCard(item));
        });
    }
}

/* 1. INTERAÇÃO INTERNA: MENU MOBILE TOGGLE */
const botaoMenu = document.querySelector(".menu-toggle");
const menuNav = document.querySelector(".menu__nav");

if (botaoMenu && menuNav) {
    botaoMenu.addEventListener("click", function () {
        botaoMenu.classList.toggle("ativo");
        menuNav.classList.toggle("ativo");
    });
}

/* 2. EXERCÍCIO: BOTÕES DE FILTRO*/
const botoesFiltro = document.querySelectorAll(".btn-filtro");

botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", function () {
        const categoriaSelecionada = botao.getAttribute("data-categoria");

        if (categoriaSelecionada === "todos") {
            renderizarCardapio(cardapio);
        } else {
            const cardapioFiltrado = cardapio.filter((item) => {
                return item.categoria === categoriaSelecionada;
            });
            renderizarCardapio(cardapioFiltrado);
        }
    });
});

/* 3. EXERCÍCIO: BARRA DE BUSCA EM TEMPO REAL*/
const meuInput = document.querySelector("#campo-texto");

if (meuInput) {
    meuInput.addEventListener("input", function (event) {
        const termoBusca = event.target.value.toLowerCase();
        const itensFiltrados = cardapio.filter((item) => {
            return item.nome.toLowerCase().includes(termoBusca);
        });
        renderizarCardapio(itensFiltrados);
    });
}

/* 4. EXERCÍCIO: VALIDAÇÃO DE SUBMIT FORMULÁRIO*/
const formulario = document.querySelector("#meu-formulario");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const mensagemUsuario = document.querySelector("#mensagem-usuario");

if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede recarregamento de página

        const nomeValido = campoNome.value.trim();
        const emailValido = campoEmail.value.trim();

        if (nomeValido === "" || emailValido === "") {
            mensagemUsuario.style.color = "red";
            mensagemUsuario.textContent = "Por favor, preencha todos os campos corretamente.";
            return;
        }

        mensagemUsuario.style.color = "green";
        mensagemUsuario.textContent = `Obrigado, ${nomeValido}! Seus dados foram enviados com sucesso.`;
        formulario.reset();
    });
}

/* 5. CONTROLE DE HORÁRIO E EVENTOS AUTOMÁTICO*/
const cafeAberto = (hora) => hora >= 8 && hora < 19;
const horaAtual = new Date().getHours();
const estaAberto = cafeAberto(horaAtual);

const botaoHero = document.querySelector(".hero .botao");
if (botaoHero) {
    botaoHero.textContent = estaAberto ? "Ver cardápio" : "Voltamos às 8h!";

    botaoHero.addEventListener("click", (event) => {
        const secaoCardapio = document.querySelector("#cardapio");
        if (secaoCardapio) {
            event.preventDefault();
            secaoCardapio.scrollIntoView({ behavior: "smooth" });
        }
    });
}

const rodape = document.querySelector(".rodape p");
if (rodape) {
    rodape.textContent = `© ${anoAtual} ${nomeCafe}. ${anosDeCasa} anos de história. Todos os direitos reservados.`;
}

// Inicializa a renderização carregando todos os produtos na tela
renderizarCardapio(cardapio);
