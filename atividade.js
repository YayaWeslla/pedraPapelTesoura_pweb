function obterEscolhaUsuario() {
    const escolha = prompt("Escolha Pedra, Papel ou Tesoura:").toLowerCase();
    const opcoes = ["pedra", "papel", "tesoura"];
    if (opcoes.includes(escolha)) {
        return escolha;
    } else {
        alert("Escolha inválida. Tente novamente!");
        return obterEscolhaUsuario();
    }
}

function gerarEscolhaComputador() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const indice = Math.floor(Math.random() * 3);
    return opcoes[indice];
}

function determinarVencedor(usuario, computador) {
    if (usuario === computador) {
        return "Empate!";
    }

    if (
        (usuario === "pedra" && computador === "tesoura") ||
        (usuario === "papel" && computador === "pedra") ||
        (usuario === "tesoura" && computador === "papel")
    ) {
        return "Você venceu!";
    } else {
        return "O computador venceu!";
    }
}

function jogarNovamente() {
    const resposta = prompt("Deseja jogar novamente? (s/n)").toLowerCase();
    return resposta === "s";
}

function jogar() {
    alert("Bem-vind@ ao jogo Pedra, Papel e Tesoura!\nVocê irá jogar contra o seu computador!");

    do {
        const escolhaUsuario = obterEscolhaUsuario();
        const escolhaComputador = gerarEscolhaComputador();
        alert(`Computador escolheu: ${escolhaComputador}`);
        const resultado = determinarVencedor(escolhaUsuario, escolhaComputador);
        alert(resultado);
    } while (jogarNovamente());

    alert("Obrigada por jogar!");
}

jogar();