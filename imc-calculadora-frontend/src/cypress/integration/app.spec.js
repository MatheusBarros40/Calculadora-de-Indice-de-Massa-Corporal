describe('Teste de submissão do formulário da Calculadora de IMC', () => {
  it('Preenche o formulário com valores aleatórios e submete', () => {
    // Visita a página da calculadora de IMC
    cy.visit('http://localhost:3000');

 // Função para gerar um nome aleatório
 const gerarNomeAleatorio = (comprimento) => {
  let resultado = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const caracteresComprimento = caracteres.length;
  for (let i = 0; i < comprimento; i++) {
    resultado += caracteres.charAt(Math.floor(Math.random() * caracteresComprimento));
  }
  return resultado;
};

// Gera valores aleatórios para nome, altura e peso
    const nomeAleatorio = gerarNomeAleatorio(10); // Gera um nome aleatório de 10 caracteres
    const alturaAleatoria = (Math.random() * (2.5 - 1.4) + 1.4).toFixed(2); // Gera um número entre 1.40 e 2.50
    const pesoAleatorio = Math.floor(Math.random() * (250 - 30) + 30); // Gera um número inteiro entre 30 e 250

    // Preenche o formulário com os valores gerados
    cy.get('#nome').type(nomeAleatorio).wait(500); // Substitua '#nome' pelo seletor correto do campo de nome
    cy.get('#altura').type(alturaAleatoria).wait(500); // Substitua '#altura' pelo seletor correto do campo de altura
    cy.get('#peso').type(pesoAleatorio).wait(500); // Substitua '#peso' pelo seletor correto do campo de peso

    // Clica no botão de submissão do formulário
    cy.get('.btn[type="submit"]').click().wait(3000); // Substitua 'button[type="submit"]' pelo seletor correto do seu botão de submissão

    // Adicione aqui asserções para verificar o resultado esperado após a submissão do formulário
    cy.contains('Mantenha o Foco!').should('be.visible');
  });
});
describe('Teste de navegação e filtragem na página de resultados do IMC', () => {
  it('Acessa a página de resultados e realiza ações de filtragem e navegação', () => {
    // Acessa a página de resultados diretamente
    cy.visit('http://localhost:3000/imc-results');

    // Clica no botão que leva à página de resultados
    cy.get('[href="/imc-results"]').click();

    // Escreve 'JP' no filtro, espera um pouco e apaga
    cy.get('#\\:r1\\:').type('JP').wait(900).clear();

    // Escreve 'Maria' no filtro, espera um pouco e apaga
    cy.get('#\\:r1\\:').type('Maria').wait(900).clear();

    // Clica no botão para ir para a próxima página duas vezes
    cy.get('[aria-label="Go to next page"]').click().wait(3000);
    cy.get('[aria-label="Go to next page"]').click().wait(1000);
    // cy.get('[data-cy=dropdownRegistrosPorPagina]').find('select').click();
    // cy.get('ul[role="listbox"]').find('li[data-value="10"]').click();
  });
});

