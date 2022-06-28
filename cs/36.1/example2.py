# código exemplo da monitoria


def check_sum(numbers, target):
    left_index = 0
    right_index = len(numbers) - 1

    while left_index < right_index:  # O(n)
        sum = numbers[left_index] + numbers[right_index]
        if sum == target:
            return True
        elif sum > target:
            right_index -= 1
        elif sum < target:
            left_index += 1

    return False


# def check_sum(numbers, target): # O(Nˆ2)
#   for index, num1 in enumerate(numbers): # N
#     for num2 in numbers[index + 1:]: # N
#       if num1 + num2 == target:
#         return True
#   return False


if __name__ == "__main__":
    assert check_sum([-1, 1, 1, 2, 3, 4], 7)
    assert check_sum([1, 2, 5, 8, 13, 21], 3)
    assert check_sum([1, 2, 5, 8, 13, 21], 22)
    assert not check_sum([1, 1, 2, 4, 4], 7)
    assert not check_sum([1, 2, 3, 4], 9)
    assert not check_sum([1, 20, 300, 4000], 0)
    print("Tudo certo!")
