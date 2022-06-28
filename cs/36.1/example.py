# def multiply_arrays(array1, array2):
#     result = []
#     number_of_iterations = 0

#     for number1 in array1:
#         print(f"Array 1: {number1}")
#         for number2 in array2:
#             print(f"Array 2: {number2}")
#             result.append(number1 * number2)
#             number_of_iterations += 1

#     print(f"{number_of_iterations} iterações!")
#     print(result)
#     return result


# meu_array = [1, 2, 3, 4, 5]

# multiply_arrays(meu_array, meu_array)


# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while (
        start <= end
    ):
        mid = (start + end) // 2  # encontro o meio

        if (
            numbers[mid] == target
        ):  # se o elemento do meio for o alvo, devolve a posição do meio
            return mid

        if (
            target < numbers[mid]
        ):  # se o elemento for menor, atualiza o índíce do fim
            end = mid - 1
        else:  # caso contrário, atualiza o índíce do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1


numbers = [2, 3, 4, 10, 40]
target = 40

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
