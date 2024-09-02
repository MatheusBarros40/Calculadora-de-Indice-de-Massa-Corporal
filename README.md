# Calculadora de Índice de Massa Corporal (IMC)

Este projeto é uma aplicação web que permite aos usuários calcular o seu Índice de Massa Corporal (IMC) de forma rápida e interativa. A aplicação foi desenvolvida utilizando o framework Django para o backend e a biblioteca React para o frontend.

## Tecnologias Utilizadas

- **Backend:** Django
- **Frontend:** React
- **Controle de Versão:** Git e GitHub

## Pré-requisitos

Antes de iniciar, certifique-se de que você tem o seguinte software instalado em seu sistema:

- Python (3.8 ou superior)
- Node.js (14 ou superior)
- npm (6 ou superior)
- Git

## Instalação

Para configurar o ambiente de desenvolvimento e executar o projeto localmente, siga os passos abaixo:

### Backend (Django)

1. Clone o repositório do projeto:

```bash
git clone https://github.com/MatheusBarros40/Calculadora-de-Indice-de-Massa-Corporal
cd imc_calculadora
```

2. Crie um ambiente virtual e ative-o:

```bash
python -m venv venv
source venv/bin/activate  # No Windows use `venv\Scripts\activate`
```

3. Instale as dependências do projeto:

```bash
pip install -r requirements.txt
```

4. Realize as migrações do banco de dados:

```bash
python manage.py migrate
```

5. Inicie o servidor de desenvolvimento:

```bash
python manage.py runserver
```

O backend estará rodando em `http://localhost:8000`.

### Frontend (React)

1. Navegue até o diretório do frontend:

```bash
cd ../imc-calculadora-frontend
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento do React:

```bash
npm start
```

O frontend estará acessível em `http://localhost:3000`.

## Uso

Para calcular o seu IMC, acesse a aplicação web através do navegador em `http://localhost:3000`, preencha os campos com o seu peso e altura e clique no botão "Calcular".

## Telas

(Espaço reservado para adicionar capturas de tela da aplicação)

- **Tela Inicial:** 
![image](https://github.com/user-attachments/assets/d1ef5351-a4df-468f-901e-1f1d33984256)
- **Tela de Resultado:** 
![image](https://github.com/user-attachments/assets/c8c9b3a8-162d-47c9-8aeb-70ad739a2834)


## Contribuições

Contribuições são sempre bem-vindas! Para contribuir, por favor, crie um fork do repositório, faça suas alterações e envie um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

---

Este README é um guia básico para o projeto de Calculadora de IMC. Certifique-se de atualizar os links do repositório e adicionar mais informações conforme necessário para refletir as especificidades do seu projeto, incluindo capturas de tela e descrições detalhadas das telas.
