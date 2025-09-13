Este projeto é um Challenge ONE da Alura, desenvolvido para colocar em prática conceitos de desenvolvimento web. O objetivo é criar uma aplicação interativa que permita aos usuários adicionar participantes, sortear amigos de forma aleatória e interagir com a lista de maneira dinâmica e intuitiva.


# Amigo Secreto – Guia de Funcionalidades Implementadas



## 🎯 Funcionalidades Principais

- **Adicionar nomes de amigos**
  - Digite o nome no campo e clique em “Adicionar” ou pressione Enter.
  - Validações automáticas:
    - Impede adicionar nomes vazios.
    - Impede adicionar nomes duplicados (não aceita repetidos).
    - Foco automático no campo de entrada após cada ação.
  - **Efeito sonoro** ao adicionar (`adicionar.mp3`).

- **Listagem dinâmica dos amigos**
  - Lista exibida logo abaixo do campo de entrada.
  - Cada nome aparece com um botão de remover ao lado (ícone de fechar).
  - Itens visualmente destacados para facilitar leitura.

- **Remover nome da lista**
  - Clique no ícone de fechar (“x”) ao lado do nome para remover.
  - Atualiza instantaneamente a lista.
  - **Efeito sonoro** ao deletar (`deletar.mp3`).

- **Sorteio do amigo secreto**
  - Clique no botão “Sortear amigo” (com ícone).
  - Sorteio aleatório entre todos da lista.
  - Validações:
    - Não permite sortear sem nomes ou com só um nome.
  - Resultado exibido em destaque logo abaixo da lista.
  - **Efeito sonoro** ao sortear (`drum.mp3`).

- **Resetar lista e resultado**
  - Botão “Reiniciar” (com ícone de seta/desfazer) ao lado do botão de sortear.
  - Limpa toda a lista de amigos e o resultado exibido.
  - Foco volta automaticamente para o campo de entrada.
  - Pronto para iniciar uma nova rodada de sorteio.


## ⚙️ Detalhes Técnicos Implementados

- **Adição de amigos:**  
  - Função `adicionarAmigo()` com validação, atualização de lista e som.
- **Remoção dinâmica:**  
  - Função `removerAmigo(index)`, remove por índice, atualiza e toca som.
- **Sorteio justo:**  
  - Função `sortearAmigo()`, impede sorteio inválido e mostra resultado.
- **Reset total da sessão:**  
  - Função `resetarJogo()`, limpa nomes e resultado, reinicia experiência.
- **Sons sincronizados:**  
  - Três arquivos de áudio, cada um para uma ação específica, disparados via `Audio.play()` no JS.
- **HTML semântico** e **CSS responsivo e moderno** com animações suaves, fontes do Google e esquema de cores atual.
- **Carregamento seguro:**  
  - JavaScript somente executado após carregamento total da estrutura HTML para evitar erros de DOM.

## Observações importantes

- As funcionalidades de tocar áudio foram implementadas com auxílio de IA
- O melhoramento do design (CSS) foi implementado com auxílio de IA
