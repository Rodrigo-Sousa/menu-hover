// Variáveis.
// Alvo, pegando o selector da classe .alvo
const alvo = document.querySelector(".alvo");
// O Link da classe minhaNavegacao, sendo atribuído para a variável link
const links = document.querySelectorAll(".minhaNavegacao a");
// Variável cores, atribuindo um array. Sendo elas Carmesin, laranga, cinza-amarronzado, ouro, ameixa, preto e amarelo limão
const cores = ["Crimson", "orange", "Taupe", "gold", "Plum ", "black", "Lime"];

// Laço de repetição, que irá percorrer o array, para verificar todos os links
for (let i = 0; i < links.length; i++) {
    //Se o nosso link sobrer a ação de ser clicado, irá executar essa array function    
    links[i].addEventListener("click", (e) => e.preventDefault());
   // Caso o cursos do mouse for apontado em um elemento, utilizamos o segunte evento, com callback
    links[i].addEventListener("mouseenter", mouseenterFunc);  
}

// Nossa função de callback do mouseenterFunc
function mouseenterFunc() {
    // Laço de repetição para verificar todos os itens do array link
    for (let i = 0; i < links.length; i++) {
        // condição para ser atribuida quando o link de possição i usando a propriedade DOM que nos retorna o nó, e atribui ao nó se um elemento é encadeado e se ele está ativo.
      if (links[i].parentNode.classList.contains("active")) {
        // Quando for verdadeiro, remover a classe ativa do nó
        links[i].parentNode.classList.remove("active");
      }
    //   Nos demais links, atribuir o estilo de opacidade em 0.25
      links[i].style.opacity = "0.25";
    }
    // Pegando o paresentNode.classList e adicionado o atributo ativo nele.
    this.parentNode.classList.add("active");
    // E para ele que está ativo, a opacidade em 1 (ou seja, em evidência)
    this.style.opacity = "1";
     
    // construindo a variável de largura, pegando o tamanho do link associado a posição dele
    const width = this.getBoundingClientRect().width;
    // construindo a variável de açtira
    const height = this.getBoundingClientRect().height;
    // construindo a variável de esquerda
    const left = this.getBoundingClientRect().left;
    // construindo a variável de largurano topo
    const top = this.getBoundingClientRect().top;
    // construindo a variável de cores, fazendo um cálculo e retornando o menor número, mas sendo passado a multiplicação de forma aleatória multiplicando pela quantidade total do array cores.
    const color = cores[Math.floor(Math.random() * cores.length)];
   
    // Atribuindo a classe alvo, os estilos de largura da variával const width, deixando ela em pixel
    alvo.style.width = `${width}px`;
    // Atribuindo a classe alvo, os estilos de largura da variával const altura, deixando ela em pixel
    alvo.style.height = `${height}px`;
    // Atribuindo a classe alvo, os estilos de largura da variával const esquerda, deixando ela em pixel
    alvo.style.left = `${left}px`;
    // Atribuindo a classe alvo, os estilos de largura da variával const topo, deixando ela em pixel
    alvo.style.top = `${top}px`;
    // Atribuindo a classe alvo, os estilos de largura da variával const cor da borda igual a cor que a variável for realizar o cálculo
    alvo.style.borderColor = color;
    // Atribuindo ao atributo transform nenhuma estilização
    alvo.style.transform = "none";
  }

