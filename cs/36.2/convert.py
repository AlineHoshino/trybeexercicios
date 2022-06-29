def convertToBinary(number):
    value, mod = divmod(number, 2)

    if number > 1:
        convertToBinary(value)
    print(mod, end="")


if __name__ == "__main__":
    decimal = 5
    convertToBinary(decimal)
