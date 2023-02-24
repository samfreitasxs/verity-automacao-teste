///<reference types="cypress"/>

describe('Acessar o site da verity e validar o titulo)', () => {
    Cypress._.times(2, () => {
  it.only('Deve validar se os elementos estao na tela', () => {
        cy.viewport(1280, 800)
        cy.visit('https://www.verity.com.br/')
        cy.title()
        cy.scrollTo(0, 1500)
        cy.contains('Nossas soluções_')
            .should('be.visible')
            .click()
      })
    })  
  })


describe('Acessar o site da verity e validar o titulo)', () => {
    Cypress._.times(2, () => {
  it.only('Deve validar se os elementos estao na tela', () => {
        cy.viewport(1280, 800)
        cy.visit('https://www.verity.com.br/')
        cy.title()
        cy.scrollTo('bottom')
        cy.contains('PT')
          .should('be.visible')
          .click()
        cy.get('#comp-l0b60nwv-dropdown-option-1')
          .click()
        cy.scrollTo(0, 1400)
        cy.contains('Culture and Tech')
              .should('be.visible')
              .click()
        
        
      })
    })  
  })