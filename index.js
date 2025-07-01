document.addEventListener("DOMContentLoaded", () => {
    const botoesComprar= document.querySelectorAll("button");
    botoesComprar.forEach((botao) => {
        botao.addEventListener("click" , ()=> {
            alert("Produto adiciona ao carrinho!");
        });
    });
});