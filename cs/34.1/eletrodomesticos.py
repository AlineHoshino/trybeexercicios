from abc import ABC, abstractmethod


class Eletrodomestico:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__amperagem_atual_no_motor = 0
        self.__velocidade_maxima = 3

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado


class Liquidificador(Eletrodomestico):  # Exemplo de Herança
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador


pessoa_cozinheira = Pessoa("Jacquin", 1000)
liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 900)
liquidificador_vermelho.ligar(1)
print("Esta ligado?", liquidificador_vermelho.esta_ligado())
liquidificador_vermelho.desligar()
print("Esta ligado?", liquidificador_vermelho.esta_ligado())
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)
print(pessoa_cozinheira.saldo_na_conta)


class Grafico(ABC):
    @abstractmethod
    def desenhar(self):
        raise NotImplementedError


class GraficoBarras():
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico de barras")


class GraficoRadar():
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico radar")


class GraficoPizza():
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico de Pizza")


grafico_1 = GraficoRadar([1, 2])
grafico_1.desenhar()
