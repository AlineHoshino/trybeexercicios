from stack import Stack


def is_valid(string):
    if len(string) % 2 != 0:
        return False

    stack = Stack()

    for char in string:
        if char not in '({[]})':
            return False
        if char in '([{':
            stack.push(char)