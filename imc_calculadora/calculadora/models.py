from mongoengine import Document, StringField, FloatField

class IMC(Document):
    nome = StringField(max_length=100, required=True)
    altura = FloatField(required=True)
    peso = FloatField(required=True)
    imc = FloatField()

    def calcular_imc(self):
        if self.altura > 0:  # Para evitar divisão por zero
            self.imc = self.peso / (self.altura ** 2)
        else:
            self.imc = None  # Definir como None se a altura não for válida

    def save(self, *args, **kwargs):
        # Calcular o IMC antes de salvar
        self.calcular_imc()
        super().save(*args, **kwargs)  # Chamar o método save da superclasse
