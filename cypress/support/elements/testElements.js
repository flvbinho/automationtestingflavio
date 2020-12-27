class testElements {
    FirstName = () => {return ':nth-child(1) > :nth-child(2) > .form-control' }
    
    LastName = () => {return ':nth-child(1) > :nth-child(3) > .form-control'}

    Address = () => {return '.col-md-8 > .form-control'}
    EmailAddress = () => {return '#eid > .form-control '}
    Phone = () => {return ' :nth-child(4) > .col-md-4 > .form-control'}
    GenderMale = () => {return ':nth-child(1) > .ng-pristine '}
    HobbiesHockey = () => {return '#checkbox3 '}
    Languages = () => {return '#msdd '} 
    LanguagesList = () => {return ':nth-child(1) > .ui-corner-all'}
    ClickFora = () => {return '#section '}
    Skills = () => {return '#Skills '}
    Country = () => {return '#countries '}
    SelectCountry = () => {return '.select2-selection__arrow '}
    SelectCountryList = () => {return '#select2-country-results > :nth-child(6)'}
    
    DateOfBirthYear = () => {return '#yearbox'}
    DateOfBirthMonth = () => {return ':nth-child(11) > :nth-child(3) > .form-control'}
    DateOfBirthDay = () => {return '#daybox'}
    
    Password = () => {return '#firstpassword '}
    ConfirmPassword = () => {return '#secondpassword '}
    Submit = () => {return '#submitbtn'}
    Refresh = () => {return '#Button1'}
    Refresh = () => {return '#Button1'}
    Video = () => {return ':nth-child(7) > .dropdown-toggle'}
    YouTube = () => {return '.open > .dropdown-menu > :nth-child(1) > a'}
    PlayVideo = () => {return '.ytp-large-play-button-bg'}

    
    
    //cenário Negativo//

    AcessoFormulário = () => {return '.active'}
    FirstName = () => {return ':nth-child(1) > :nth-child(2) > .form-control' }
    LastName = () => {return ':nth-child(1) > :nth-child(3) > .form-control'}

    Address = () => {return '.col-md-8 > .form-control'}
    EmailAddress = () => {return '#eid > .form-control '}

    DateOfBirthYear = () => {return '#yearbox'}
    DateOfBirthMonth = () => {return ':nth-child(11) > :nth-child(3) > .form-control'}
    DateOfBirthday = () => {return '#daybox'}

    Submit = () => {return '#submitbtn'}



}
export default testElements;