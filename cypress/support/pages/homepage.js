export default class HomePage {
    static visit() {
      cy.visit('/')
    }
  
    static clickSolucoes() {
      cy.contains('Soluções').click()
    }
  
    static clickCultureTech() {
      cy.contains('Culture and Tech').click()
    }
  
    static getTitulo() {
      return cy.get('h1')
    }
  }
  