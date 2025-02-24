

//  Verificar velocidade do carro e calcular multa
function verificarVelocidade(velocidade) {
    const limite = 80;
    if (velocidade > limite) {
        let multa = (velocidade - limite) * 5;
        console.log(`Voce foi multado! O valor da multa é R$${multa.toFixed(2)}`);
    } else {
        console.log("Velocidade dentro do limite permitido.");
    }
}

//  Verificar se o ano é bissexto
function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        console.log(`${ano} é um ano bissexto.`);
    } else {
        console.log(`${ano} não é um ano bissexto.`);
    }
}

//  Situação de alistamento militar
function verificarAlistamento(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    
    if (idade < 18) {
        console.log(`Você tem ${idade} anos. Faltam ${18 - idade} anos para o alistamento.`);
    } else if (idade === 18) {
        console.log("Você deve se alistar este ano!");
    } else {
        console.log(`Você ja passou do tempo de alistamento em ${idade - 18} anos.`);
    }
}

//  Desconto especial para o Dia da Mulher
function calcularDesconto(nome, sexo, valorCompra) {
    let desconto = sexo.toLowerCase() === 'feminino' ? 0.13 : 0.05;
    let valorFinal = valorCompra * (1 - desconto);
    
    console.log(`${nome}, o valor da sua compra com desconto é R$${valorFinal.toFixed(2)}`);
}

//  Calcular o preço da passagem com base na distância
function calcularPassagem(distancia) {
    let preco = distancia <= 200 ? distancia * 0.50 : distancia * 0.45;
    console.log(`O preço da passagem para ${distancia}Km é R$${preco.toFixed(2)}`);
}

//  Verificar se três segmentos podem formar um triângulo
function podeFormarTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        console.log("Os segmentos podem formar um triangulo.");
    } else {
        console.log("Os segmentos NÃO podem formar um triangulo.");
    }
}

// Testes dos programas
verificarVelocidade(90);
ehBissexto(2024);
verificarAlistamento(2006);
calcularDesconto("Lucas", "Masculino", 500);
calcularPassagem(250);
podeFormarTriangulo(3, 4, 5);

