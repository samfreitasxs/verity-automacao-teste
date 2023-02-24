///<reference types="cypress"/>

describe('Acessar o site da verity e preencher o formulario e enviar)', () => {
    Cypress._.times(2, () => {
  it.only('Deve validar se os elementos estao na tela', () => {
        cy.viewport(1280, 800)
        cy.visit('https://www.verity.com.br/')
        cy.title()
        cy.contains('Contato')
            .should('be.visible')
            .click()
        cy.scrollTo(0, 1700)
        cy.get('#input_comp-kwz6tqej')
            .type('Samuel Freitas')
        cy.get('#input_comp-kwz6tqf7')
           .type('samuel.sfdf@gmail.com')
        cy.get('#input_comp-kwz6tqfe')
           .type('41995670174')
        cy.get('#textarea_comp-kwz6tqfr')
           .type('teste teste teste teste teste')
        cy.get('[data-testid=input]')
          .click()
        cy.get('[data-testid=buttonElement]')
          .click()
          .should('be.visible', 'Obrigado!')
      })
    })  
  })