Feature: Preencher formulário de contato

  Background:
    Given que estou na página de contato

  Scenario: Preencher formulário de contato com sucesso
    When eu preencho o formulário com as informações "Nome", "email@exemplo.com", "(11) 1111-1111", "Mensagem"
    And eu clico no botao "Enviar"
    Then eu devo ver a mensagem de sucesso "Mensagem enviada com sucesso."
