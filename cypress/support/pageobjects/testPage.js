///  <reference types="Cypress" />

import testElements from '../elements/testElements'
const testelements = new testElements
const url = Cypress.config("baseUrl")

class TestPage {
    // Método para Acessar o Site//
    acessarSite() {
        cy.visit(url)
        cy.wait(5000)
        cy.screenshot()
    }
    //Método para esperar o site//
    esperar(){

        cy.wait(5000)
    }
    //Método para Preencher os Campos//
    
    PreencherFirstName() {
        cy.get(testelements.FirstName()).type('Flávio')
        cy.wait(2000)
        cy.screenshot()
    }

    PreencherLastName() {
        cy.get(testelements.LastName()).type('Martins')
        cy.wait(2000)
        cy.screenshot()
    }

    PreencherAddress() {
        cy.get(testelements.Address()).type('Avenida Prestes Maia')
        cy.wait(2000)
        cy.screenshot()

    }

    PreencherEmailAddress() {
        cy.get(testelements.EmailAddress()).type('flaviomrtn@gmail.com')
        cy.wait(2000)
        cy.screenshot()
    }

    PreencherPhone() {
        cy.get(testelements.Phone()).type('11992019440')
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarGenderMale() {
        cy.get(testelements.GenderMale()).click()
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarHobbiesHockey() {
        cy.get(testelements.HobbiesHockey()).click()
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarLanguages() {
        cy.get(testelements.Languages()).click()  
        cy.wait(2000)      
        cy.get(testelements.LanguagesList()).click()
        cy.wait(2000)
        cy.get(testelements.ClickFora()).click() 
        cy.screenshot()
    }

    SelecionarSkills() {
        cy.get(testelements.Skills()).select('Android')
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarCountry() {
        cy.get(testelements.Country()).select('Brazil')
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarSelectCountry() {
        cy.get(testelements.SelectCountry()).click()
        cy.wait(2000)
        cy.get(testelements.SelectCountryList()).click()
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarDateOfBirthYear() {
        cy.get(testelements.DateOfBirthYear()).select('1985')
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarDateOfBirthMonth() {
        cy.get(testelements.DateOfBirthMonth()).select('May')
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarDateOfBirthDay() {
        cy.get(testelements.DateOfBirthDay()).select('13')
        cy.wait(2000)
        cy.screenshot()
    }

    PreencherPassword() {
        cy.get(testelements.Password()).type('password')
        cy.wait(2000)
        cy.screenshot()
    }

    PreencherConfirmPassword() {
        cy.get(testelements.ConfirmPassword()).type('password')
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarSubmit() {
        cy.get(testelements.Submit()).click()
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarRefresh() {
        cy.get(testelements.Refresh()).click()
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarRefresh() {
        cy.get(testelements.Refresh()).click()
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarVideo() {
        cy.get(testelements.Video()).click()
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarYouTube() {
        cy.get(testelements.YouTube()).click()
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarPlayVideoYouTube() {
        cy.get(testelements.PlayVideo()).click()
        cy.wait(2000)
        cy.screenshot()
    }




    //cenário negativo//

    SelecionarAcessoFormulário() {
        cy.get(testelements.AcessoFormulário()).click()
        cy.wait(2000)
        cy.screenshot()
    }

    PreencherFirstName() {
        cy.get(testelements.FirstName()).type('Flávio')
        cy.wait(2000)
        cy.screenshot()
    }

    PreencherLastName() {
        cy.get(testelements.LastName()).type('Martins')
        cy.wait(2000)
        cy.screenshot()
    }

    PreencherAddress() {
        cy.get(testelements.Address()).type('Avenida Prestes Maia')
        cy.wait(2000)
        cy.screenshot()

    }

    PreencherEmailAddress() {
        cy.get(testelements.EmailAddress()).type('flaviomrtn@gmail.com')
        cy.wait(2000)
        cy.screenshot()
    }


    PreencherPhone() {
        cy.get(testelements.Phone()).type('11-99201-9440')
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarDateOfBirthYear() {
        cy.get(testelements.DateOfBirthYear()).select('1985')
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarDateOfBirthMonth() {
        cy.get(testelements.DateOfBirthMonth()).select('May')
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarDateOfBirthday() {
        cy.get(testelements.DateOfBirthday()).select('32')
        cy.wait(2000)
        cy.screenshot()
    }

    SelecionarSubmit() {
        cy.get(testelements.Submit()).click()
        cy.wait(2000)
        cy.screenshot()
    }
    

}
export default TestPage;