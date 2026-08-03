/*const nomeCafe = "pretinho";
const anoFundacao = 2010;
const anoAtua = 2026;
const anosFundacao = anoAtual - anoFundacao;
console.log(`Estamos em atuação á ${anosFundacao} anos`);
console.log(typeof nomeCafe);
console.log(typeof anoFundacao);
console.log(typeof anoAtual);8*/


const cidade = "São Paulo";
let temperatura = 25;
console.log(typeof cidade);
console.log(typeof temperatura);

console.log("cafe".toUpperCase());
console.log("cafe aurora".length);

const a = Boolean (0);
const b = Boolean ("");
const c = Boolean ("cafe");
console.log(a, b, c);

console.log("Café Aurora - script carregado!");

const nomeCafe = "Café Aurora";

const anoFundacao = 2020;
const anoAtual = new Date().getFullYear();
const anosDeCasa = anoAtual - anoFundacao;

const preco1 = 7;
const preco2 = 12;
const preco3 = 8;
const preco4 = 7;
const media = (preco1 + preco2 + preco3 + preco4) / 4;

function formatarPreco(valor){
    return `R$ ${valor.toFixed(2)}`;
}

console.log(formatarPreco(7)); 

console.log(formatarPreco(preco1));
console.log(formatarPreco(preco2));
console.log(formatarPreco(preco3));
console.log(formatarPreco(preco4));

const cafeAberto= (hora) => hora >= 8 && hora< 19

const horaAtual = new Date().getHours();
const estaAberto = cafeAberto(horaAtual);

console.log(estaAberto ? "O café está aberto." : "O café está fechado.");

const botao= document.querySelector(".hero .botao");
botao.textContent= estaAberto ? "Ver cadapio" : "voltamos as 8H"

console.log(`${nomeCafe} está no ar há ${anosDeCasa} anos.`);
console.log(`Preço médio: R$ ${media.toFixed(2)}`);

const rodape = document.querySelector(".rodape p");

rodape.textContent =
    `© ${anoAtual} ${nomeCafe}. ${anosDeCasa} 
    anos de história. Todos os direitos reservados.`;

    