# def print_name_scada(name):
#     for number in range(len(name)):
#         nova_palavra = '' 
#         contador = len(name)
#         for letter in name:
#             if number < contador:
#                 nova_palavra += letter
#                 contador -= 1
#         print(nova_palavra)


# print_name_scada("Aline")

def vertical_inverted_ladder(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()


if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name)
