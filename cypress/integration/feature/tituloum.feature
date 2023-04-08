Feature: Validar título "Nossas soluções"

  Background:
    Given que estou na página inicial

  Scenario: Verificar o título "Nossas soluções"
    When eu clico no link "Soluções" no menu
    Then eu devo ver o título "Nossas soluções"
