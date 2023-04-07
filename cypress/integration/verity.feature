@formulario
Feature: Verity

    Acessar o site e realizar as validacoes

Background: Acessar o site da verity e preencher o formulario e enviar
    Given que o site da verity foi acessado
    When as informações do usuário são inseridas
    Then em seguida, a página inicial será exibida

@titulo
Scenario: Acessar o site da verity e validar o titulo
    Given que o site da verity foi acessado
    When localizo o titulo Nossas soluções_
    Then tenho o retorno positivo

@titulodois
Scenario: Acessar o site da verity e validar o outo titulo
    Given que o site da verity foi acessado
    When localizo o titulo Culture and Tech
    Then tenho o retorno positivo
