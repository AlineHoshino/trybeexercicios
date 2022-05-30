Venv - ambiente virtual 
source .venv/bin/activate - ativa o script
recebendo dados: input("digite seu número")

Em Python, podemos fazer interpolação de variáveis e expressões utilizando f-string. Adicionamos um f antes das aspas e o valor de saída entre chaves. Essa dica é importante, pois é a maneira mais eficiente de formatar strings.

x = 5
y = 3
print(f"{x} / {y} = {x / y:.2f}")  # saída: 5 / 2 = 1.67
# {x} é substituído por 5
# {y} é substituído por 3
# {x / y:.2f} O que vem após os dois pontos são formatadores, como nesse exemplo, duas casas decimais (.2f).
print(f"{x:.^3}")  # saída: ".5."
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos

with é a palavra chave para contexto 

import json 

with open("superheroes.json") as superheroes_file:
    superheroes_list = json.load(superheroes_file)
    for superhero in superheroes_list:
        print(superhero["alter_ego"])
