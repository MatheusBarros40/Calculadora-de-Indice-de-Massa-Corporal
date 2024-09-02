from django.db import models

class IMC(models.Model):
    nome = models.CharField(max_length=100)
    altura = models.FloatField()
    peso = models.FloatField()
    imc = models.FloatField(blank=True, null=True)  # Permitir que o campo IMC seja opcional

    def calcular_imc(self):
        self.imc = self.peso / (self.altura ** 2)
        self.save()
   
    def save(self, *args, **kwargs):
        # Calcular o IMC antes de salvar
        if self.altura > 0:  # Para evitar divisão por zero
            self.imc = self.peso / (self.altura ** 2)
        else:
            self.imc = None  # Definir como None se a altura não for válida
        super().save(*args, **kwargs)  # Chamar o método save da superclasse