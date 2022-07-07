string = "Hoje considro um bom dia para aprender python. 80".split()

print(sorted(string))
print(sorted(string, key=str.lower))

# o padrão é mostrar maiuscula
# mas usando a key oredena pelas minusculas
