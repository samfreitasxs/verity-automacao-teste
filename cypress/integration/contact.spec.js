import ContactPage from '../support/step_definitions/contactPage'

describe('Teste no formulário de contato', () => {
  it('Envia mensagem com sucesso', () => {
    ContactPage.visit()
    ContactPage.fillForm('Nome', 'samuel.sfdf@gmail.com', '(41) 99567-0174', 'Formulario preenchido')
    ContactPage.getSuccessMessage().should('be.visible')
  })
})
