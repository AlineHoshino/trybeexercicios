meu_dict = {123: "um dois tres", "chave": "valor"}
print(meu_dict[123])

for value in meu_dict:
    print(value)
print("tchau")


def soma(x, y):
    return x + y


soma(2, 2)  # os parâmetros aqui são posicionais

soma(x=2, y=2)  # aqui estamos nomeando os parâmetros
soma(y=2, x=2)  # aqui estamos nomeando os parâmetros