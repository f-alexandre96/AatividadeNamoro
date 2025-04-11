const botao = document.getElementById('meuBotao');
function sim(){
    alert("Aqui está o meu telefone: 4002-8922");
}

const botaoNao = document.getElementById("naoBtn");
function moverBotao() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const posicaoX = Math.random() * (larguraJanela - larguraBotao);
    const posicaoY = Math.random() * (alturaJanela - alturaBotao);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = `${posicaoX}px`;
    botaoNao.style.top = `${posicaoY}px`;
}

botaoNao.addEventListener("mouseover", moverBotao);