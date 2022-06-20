class Pessoa():
    def __init__(self, nome, idade, altura, peso=80):
        self.nome = nome
        self._idade = idade
        self.altura = altura
        self.__peso = peso

    def __str__(self):
        return f'O nome da pessoa é {self.nome} e a sua idade é {self._idade}'

    def __repr__(self):
        return f'{self.nome}'

    def __gt__(self, outra_pessoa):
        return len(self.nome) > len(outra_pessoa.nome)


felps = Pessoa('Fleipe', 28, 1.7, 85)
roni = Pessoa('ronierson', 30, 1.8, 80)
eli = Pessoa('eli', 32, 1.9, 82)
