describe('Teste de navegação', () => {
    it('Navega para a página de serviços', () => {
      cy.visit('https://www.verity.com.br/')
      cy.navigateTo('Serviços')
      cy.url().should('include', '/servicos/')
    })
  })
  