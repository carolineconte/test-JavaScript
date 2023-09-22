/*
Função JogoDaVida(tabuleiro, gerações):
    Para cada geração de 1 até gerações:
        novoTabuleiro = CopiarTabuleiro(tabuleiro)
        Para cada célula no tabuleiro:
            vizinhosVivos = ContarVizinhosVivos(tabuleiro, célula)
            Se célula estiver viva:
                Se vizinhosVivos < 2 ou vizinhosVivos > 3:
                    novoTabuleiro[célula] = morta
            Senão:
                Se vizinhosVivos == 3:
                    novoTabuleiro[célula] = viva
        tabuleiro = novoTabuleiro
        ExibirTabuleiro(tabuleiro)
        
Função CopiarTabuleiro(tabuleiro):
    Crie um novo tabuleiro com as mesmas dimensões de tabuleiro
    Copie o estado de cada célula de tabuleiro para o novoTabuleiro
    Retorne novoTabuleiro

Função ContarVizinhosVivos(tabuleiro, célula):
    Inicialize vizinhosVivos com 0
    Para cada célula vizinha de célula:
        Se célula vizinha estiver viva:
            Incrementar vizinhosVivos em 1
    Retorne vizinhosVivos

Função ExibirTabuleiro(tabuleiro):
    Exiba o estado do tabuleiro na tela (pode ser texto ou gráfico)

# Exemplo de uso:
tabuleiro = InicializarTabuleiro()  # Crie e configure o tabuleiro inicial
JogoDaVida(tabuleiro, gerações=100)  # Execute o jogo por 100 gerações
*/
