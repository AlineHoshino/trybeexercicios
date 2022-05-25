# nums = input("Insira valores aqui, separados por espaço: ")

# numsArr = nums.split(" ")

# sum = 0
# for num in numsArr:
#     if not num.isdigit():
#         print(f"Erro ao somar valores, {num} não é um dígito.")
#     else:
#         sum += int(num)

# print(f"A soma dos valores válidos é: {sum}")


a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (1, 2, 3)
# Quando um * está presente no desempacotamento, os valores em formato de lista
print(head)  # saída: 1
print(tail)  # saída: [2, 3]
