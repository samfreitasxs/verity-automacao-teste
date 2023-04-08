Feature: Validar título "Culture and Tech"

  Background:
    Given que estou na página inicial

  Scenario: Verificar o título "Culture and Tech"
    When eu clico no link "Culture and Tech" no menu
    Then eu devo ver o título "Culture and Tech"
