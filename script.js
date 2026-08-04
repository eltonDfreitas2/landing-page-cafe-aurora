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

renderizarCardapio(cardapio);

const cafeAberto = (hora) => hora >= 8 && hora < 19;
const horaAtual = new Date().getHours();
const estaAberto = cafeAberto(horaAtual);

const botao = document.querySelector(".hero .botao");
if (botao) {
    botao.textContent = estaAberto ? "Ver cardápio" : "Voltamos às 8h!";
}

const rodape = document.querySelector(".rodape p");
if (rodape) {
    rodape.textContent = `© ${anoAtual} ${nomeCafe}. ${anosDeCasa} anos de história. Todos os direitos reservados.`;
}

botao.addEventListener("click",(event) => {
const secaoCardapio = document.querySelector("#cardapio");
event.preventDefault();
secaoCardapio.scrollIntoView({behavior: "smooth"});
});

