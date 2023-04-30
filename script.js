// Variáveis para armazenar escolhas e resultados
var resultado;
var jogador1;
var computadorEscolha;

// Variáveis para armazenar pontos
var pontosJogador = 0;
var pontosOponente = 0;

// Função para escolha do jogador e exibir a imagem correspondente
function jogadorEscolha(opcao) {
  jogador1 = opcao;
  const imagem = document.getElementById("maojogador");
  imagem.src = `imagens/${opcao}-jogador.png`;
  imagem.alt = `Imagem de ${opcao}`;
}

// Função para gerar a escolha do computador e exibir a imagem correspondente
function jogar() {
  // Gerar a escolha do computador
  var escolhas = ["pedra", "papel", "tesoura"];
  computadorEscolha = escolhas[Math.floor(Math.random() * escolhas.length)];

  // Exibir a imagem correspondente
  var imagem = document.getElementById("maooponente");
  switch(computadorEscolha) {
    case 'pedra':
      imagem.src = "imagens/pedra.png";
      imagem.alt = "Imagem de pedra";
      break;
    case 'papel':
      imagem.src = "imagens/papel.png";
      imagem.alt = "Imagem de papel";
      break;
    case 'tesoura':
      imagem.src = "imagens/tesoura.png";
      imagem.alt = "Imagem de tesoura";
      break;
  }
  determinarResultado();
  exibirPlacar(); // Adicionado para atualizar o placar
  exibirResultado();
  return computadorEscolha;
}

// Função para comparar as escolhas e determinar o resultado
function determinarResultado() {
    if (jogador1 === computadorEscolha) {
      resultado = "Empate!";
    } else if (
      (jogador1 === "pedra" && computadorEscolha === "tesoura") ||
      (jogador1 === "papel" && computadorEscolha === "pedra") ||
      (jogador1 === "tesoura" && computadorEscolha === "papel")
    ) {
      resultado = "Você ganhou!";
      pontosJogador++;
    } else {
      resultado = "Você perdeu!";
      pontosOponente++;
    }
}

// Função para exibir o resultado ao jogador
function exibirResultado() {
  document.getElementById("resultado").innerHTML = resultado;
}

// Função para atualizar o placar na tela
function exibirPlacar() {
  document.getElementById("pontos-jogador").innerHTML = pontosJogador;
  document.getElementById("pontos-oponente").innerHTML = pontosOponente;
}

//Função para resetar o jogo
function reset() {
  // redefinir as variáveis do jogo
  jogador1 = undefined;
  computadorEscolha = undefined;
  resultado = undefined;
  pontosJogador = 0;
  pontosOponente = 0;
  
  // redefinir as imagens dos jogadores
  document.getElementById("maojogador").setAttribute("src", "imagens/pedra-jogador.png");
  document.getElementById("maojogador").setAttribute("alt", "Imagem de pedra");
  document.getElementById("maooponente").setAttribute("src", "imagens/pedra.png");
  document.getElementById("maooponente").setAttribute("alt", "Imagem de pedra");
  
  // limpar o resultado exibido na tela
  document.getElementById("resultado").innerHTML = "";

  // atualizar o placar na tela
  exibirPlacar();
}


// Chamar as funções em ordem para executar o jogo
jogadorEscolha();
jogar();
determinarResultado();
exibirResultado();
reset();
