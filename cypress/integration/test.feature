Feature: Realizar Cadastro 

Scenario: Preencher todos os campos em branco

    Given que acesso o formulário
    When  preencho os campos em branco
    And   clico em submit
    Then  valido campos em branco
    And   clico em video
    And   clico em youtube
   



Scenario: Preencher o Campo date of birth incorretamente

    Given que acesso o formulário
    When  preencho campos obrigatórios
    And   preencho o campo date of birth incorretamente
    Then  clico em submit

