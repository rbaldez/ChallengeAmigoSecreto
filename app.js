// variável que armazena os nomes
let listaAmigos = [];

// ---- Sons ----
let somAdicionar = new Audio('assets/adicionar.mp3');
let somDeletar = new Audio('assets/deletar.mp3');
let somSortear = new Audio('assets/drum.mp3');



// função para adicionar amigos
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    // alerta de campo vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira o nome de um amigo.');
        inputAmigo.focus();
        return;
    }
    // alerta de nome já inseriro
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        inputAmigo.focus();
        return;
    }
    // insere nome no array, exibe na lista, limpa sorteio quando nove nome é inserido
    listaAmigos.push(nomeAmigo);
    inputAmigo.value = '';
    atualizarLista();
    inputAmigo.focus();
    limparResultado();
    // sons ao clicar
    somAdicionar.currentTime = 0; // Para tocar do início se clicar rápido várias vezes
    somAdicionar.play();
}

// função atualizar a lista
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    listaAmigos.forEach((nomeAmigo, index) => {
        let novoAmigo = document.createElement('li');
       
        // mostrar e excluir amigo
        novoAmigo.innerHTML = `
            <span>${nomeAmigo}</span>
            <button onclick="removerAmigo(${index})" class="button-remove" aria-label="Remover ${nomeAmigo}">
            <img src="assets/fechar.png" alt="Remover ${nomeAmigo}" width="18" height="18">
            </button>
        `;
        lista.appendChild(novoAmigo);
    });
}

// função para remover o amigo
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
    limparResultado();
    // som ao clicar
    somDeletar.currentTime = 0;
    somDeletar.play();
}

// função para sortear amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um nome para realizar o sorteio!');
        return;
    }
    
    if (listaAmigos.length === 1) {
        alert('Adicione pelo menos dois nomes para realizar o sorteio!');
        return;
    }
    
    // Sorteia um amigo aleatório
    let nomeSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[nomeSorteado];

    // tocar som ao sortear
    somSortear.currentTime = 0;
    somSortear.play();
    
    // Exibe o resultado
    exibirResultado(amigoSorteado);
}

// função para exibir amigo sorteado
function exibirResultado(amigoSorteado) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li class="result-item">
            <strong>🎉 O amigo secreto sorteado foi:</strong>
            <span class="winner-name">${amigoSorteado}</span>
        </li>
    `;
}
// função para limpar o resultado anterior
function limparResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}
// Garante que o HTML esteja carregado antes do JS rodar
document.addEventListener('DOMContentLoaded', function() {
    let inputAmigo = document.getElementById('amigo');
    
    //verificação
    if (inputAmigo) {
        inputAmigo.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                adicionarAmigo();
            }
        });
        inputAmigo.focus();
    } else {
        console.error('Elemento #amigo não encontrado!');
    }
});


// função para recomeçar o jogo
function resetarJogo() {
    listaAmigos = [];
    atualizarLista();
    limparResultado();
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}
// funções para adicionar som ao clicar
