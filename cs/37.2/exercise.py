def contains_duplicate(nums):
    nums.sort()
    for index in range(len(nums) - 1):
        if nums[index] == nums[index + 1]:
            return True
    return False


test1 = [1, 2, 3, 1]
test2 = []
test3 = [1, 2, 3, 4]
test4 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

print(contains_duplicate(test1))

candies = 2, 3, 5, 1, 3
extra_candies = 3


def kid_with_candes(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


print(kid_with_candes(candies, extra_candies))
# resolução vista em aula
