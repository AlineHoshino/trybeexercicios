class Human:
    def __init__(self, nome):
        self.nome = nome

    def talk(self):
        return "Estou conversando"

    @classmethod
    def evolute(cls):
        return "Estou evoluindo"

