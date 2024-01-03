let listaDeNumeroSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});


}
function mensagemInicial(){

  exibirTextoNaTela('h1', 'Jogo do número secreto' );
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
      exibirTextoNaTela('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let menssagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela('p', menssagem);
      document.querySelector('#reiniciar').removeAttribute('disabled');
    }
    else{
      if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'o número secreto é menor')
      }
      else{
        exibirTextoNaTela('p', 'o número secreto é maior');
      }
      tentativas++
      limparCampo()
    }
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeNumeroEscolhidos = listaDeNumeroSorteados.length;

  if (quantidadeDeNumeroEscolhidos == numeroLimite){
    listaDeNumeroSorteados = [];
  }

  if (listaDeNumeroSorteados.includes(numeroEscolhido)){
      return gerarNumeroAleatorio();
  }
  else{
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido
  }
}


function limparCampo (){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.querySelector('#reiniciar').setAttribute('disabled', true);
}