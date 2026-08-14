const preco = [7, 12, 8, 10];
console.log(preco[0], preco[3]);
console.log(preco.length);
preco.push(15);
console.log(preco);

const digite = document.querySelector("#campo-texto");
digite.addEventListener("input", (event) => {
    const texto = event.target.value;
    
    // 4. Imprima no Console o texto em MAIÚSCULAS
    console.log("Texto em maiúsculas:", texto.toUpperCase());

    // 5. Mostre também quantas letras foram digitadas
    console.log("Quantidade de letras:", texto.length);
});