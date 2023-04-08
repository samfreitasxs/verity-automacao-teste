class ContactPage {
    visit() {
      cy.visit('https://www.verity.com.br/contato/')
    }
  
    fillForm(name, email, phone, message) {
      cy.get('#nome').type(name)
      cy.get('#email').type(email)
      cy.get('#telefone').type(phone)
      cy.get('#mensagem').type(message)
      cy.get('#enviar').click()
    }
  
    getSuccessMessage() {
      return cy.contains('Mensagem enviada com sucesso.')
    }
  }
  
  export default new ContactPage()
  