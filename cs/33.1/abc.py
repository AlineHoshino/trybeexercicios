def letra(a=0, b=0, c=0):
    print(a)
    print(b)
    print(c)


letra(1, 2)
letra(c=1, b=2)


def largeNumber(a, b):
    if(a > b):
        return a
    else:
        return b


print(largeNumber(6, 5))


ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    # o sinal % representa a operação "resto".
    if (rating % 3) == 0:
        print(f'{rating} é múltiplo de 3')


def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(mean([1, 2, 3, 4, 5]))


def draw_square(n):
    for row in range(n):
        print(n * '*')


draw_square(6)


def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(find_biggest_name(["Joao", "Fernanda", "Alex", "Emanuella"]))
