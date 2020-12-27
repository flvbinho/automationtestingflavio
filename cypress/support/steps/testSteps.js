/* global Given, Then, And, When  */


import TestPage from '../pageobjects/testPage'
const projeto = new TestPage



Given("que acesso o formulário", () => {
    projeto.acessarSite();
    projeto.esperar();
})

When("preencho os campos em branco", () => {
    projeto.PreencherFirstName();
    projeto.PreencherLastName();
    projeto.PreencherAddress();
    projeto.PreencherEmailAddress();
    projeto.PreencherPhone();
    projeto.SelecionarGenderMale();
    projeto.SelecionarHobbiesHockey();
    projeto.SelecionarLanguages();
    //projeto.SelecionarLanguagesList();
    //projeto.SelecionarClicarFora();
    projeto.SelecionarSkills();
    projeto.SelecionarCountry();
    projeto.SelecionarSelectCountry();
    projeto.SelecionarDateOfBirthYear();
    projeto.SelecionarDateOfBirthMonth();
    projeto.SelecionarDateOfBirthDay();
    projeto.PreencherPassword();
    projeto.PreencherConfirmPassword();
    

   
})

And("clico em submit", () => {
    projeto.SelecionarSubmit();
})

Then("valido campos em branco", () => {
    projeto.SelecionarRefresh();
})

And("clico em video", () => {
    projeto.SelecionarVideo();
})

And("clico em youtube", () => {
    projeto.SelecionarYouTube();
})

//And("clico em play youtube", () => {
    //projeto.SelecionarPlayVideoYouTube();
    //})


    ////Cenário Negativo////

Given("que acesso o formulário", () => {
    projeto.SelecionarAcessoFormulário();
})

When("preencho campos obrigatórios", () => {
    projeto.PreencherFirstName();
    projeto.PreencherLastName();
    projeto.PreencherAddress();
    projeto.PreencherEmailAddress();
    projeto.PreencherPhone();
    projeto.SelecionarGenderMale();
    projeto.SelecionarHobbiesHockey();
    projeto.SelecionarSkills();
    projeto.SelecionarCountry();
})

And("preencho o campo date of birth incorretamente", () => {
    projeto.SelecionarDateOfBirthYear();
    projeto.SelecionarDateOfBirthMonth();
    projeto.SelecionarDateOfBirthday();
})

Then("clico em submit", () => {
    projeto.SelecionarSubmit();
})