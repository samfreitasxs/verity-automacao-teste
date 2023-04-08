Cypress.Commands.add('preencherFormulario', (nome, email, telefone, mensagem) => {
    cy.get('#nome').type(nome)
    cy.get('#email').type(email)
    cy.get('#telefone').type(telefone)
    cy.get('#mensagem').type(mensagem)
  })
  