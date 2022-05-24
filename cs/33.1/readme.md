a = 5
type(a) => type representa o typeof de javascript
<class 'int'>
Para entender comandos. Exemplo: help("if")
Em python chamamos os arrays de lista

Interseção

admin_user = {'Alberto', 'Gabi'}
data_squad = {'Gabi', 'Nakano', 'Lucca'}
admin_user.intersection(data_squad)
{'Gabi'}

lista => conjunto de entidades
Tupla informações de uma mesma entidade
dicionário chave- valor

uma lista é uma sequência mutável e ordenada de elementos. Ela pode armazenar elementos heterogêneos, ter seu tamanho variável e crescer à medida que itens são adicionados.

fruits = ["laranja", "maçã", "uva", "abacaxi"]  # elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por indices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("abacaxi")  # removendo uma fruta

fruits.extend(["pera", "melão", "kiwi"])  # acrescenta uma lista de frutas a lista original

fruits.index("maçã")  # retorna o índice onde a fruta está localizada, neste caso 1
 em seu programa
fruits.sort()  # ordena a lista de frutas