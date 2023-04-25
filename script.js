// Variáveis para armazenar escolhas e resultados
var jogadorEscolha;
var computadorEscolha;
var resultado;

// Função para obter a escolha do jogador através de um prompt
function obterEscolhaDoJogador() {
    jogadorEscolha = prompt("Escolha entre Pedra, Papel ou Tesoura:").toLowerCase();
}

// Função para gerar aleatoriamente a escolha do computador
function gerarEscolhaDoComputador() {
    var escolhas = ["pedra", "papel", "tesoura"];
    computadorEscolha = escolhas[Math.floor(Math.random() * escolhas.length)];
}

// Função para comparar as escolhas e determinar o resultado
function determinarResultado() {
    if (jogadorEscolha === computadorEscolha) {
      resultado = "Empate!";
    } else if (
      (jogadorEscolha === "pedra" && computadorEscolha === "tesoura") ||
      (jogadorEscolha === "papel" && computadorEscolha === "pedra") ||
      (jogadorEscolha === "tesoura" && computadorEscolha === "papel")
    ) {
      resultado = "Você ganhou!";
    } else {
      resultado = "Você perdeu!";
    }
}

// Função para exibir o resultado ao jogador
function exibirResultado() {
    alert("Você escolheu: " + jogadorEscolha + "\n" +
          "O computador escolheu: " + computadorEscolha + "\n" +
          "Resultado: " + resultado);
}

// Chamar as funções em ordem para executar o jogo
obterEscolhaDoJogador();
gerarEscolhaDoComputador();
determinarResultado();
exibirResultado();