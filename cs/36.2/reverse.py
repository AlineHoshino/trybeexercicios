def reverse(array):
    if len(array) <= 1:
        return array
    else:
        return [array[-1]] + reverse(array[: len(array) - 1])


print(reverse([1, 2, 3, 4, 5]))
