from django.apps import AppConfig
from mongoengine import connect

class CalculadoraConfig(AppConfig):
    name = 'calculadora'

    def ready(self):
        # Conecte-se ao seu banco de dados MongoDB aqui, se necessário
        connect('data_imc', host='localhost', port=27017)
