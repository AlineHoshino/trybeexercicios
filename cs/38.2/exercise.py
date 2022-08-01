def to_buy(shelf):
    unique_in_shelf = set(shelf)
    all_items = set(range(1, 21))
    return all_items - unique_in_shelf


print(to_buy([1, 2, 3, 4, 5]))
