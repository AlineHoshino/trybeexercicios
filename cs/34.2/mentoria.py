# Código desenvolvido na mentoria para criar seu proprio iterador

nomes = ["Isaac", "Felps", "João", "Will"]


class MeuIteravel:
    def __init__(self, dados):
        # Faz alguma coisa complicada e gera dados
        self.dados = dados

    def __iter__(self):
        return MeuIteradorDeLista(self.dados)


class MeuIteradorDeLista:
    def __init__(self, lista):
        self.lista = lista
        self.pos = -1

    def __next__(self):
        try:
            valor = self.lista[self.pos]
        except IndexError:
            raise StopIteration()
        else:
            self.pos -= 1
            return valor


iteravel = MeuIteravel(nomes)

for nome1 in iteravel:
    for nome2 in iteravel:
        print(nome1, nome2)
