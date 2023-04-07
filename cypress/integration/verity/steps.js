import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';


Given(/^que o site da verity foi acessado$/, () => {

	cy.visit('https://www.verity.com.br/')
    cy.viewport(1280, 800)
        cy.title()
});

When(/^as informações do usuário são inseridas$/, () => {
	
        cy.contains('Contato')
            .should('be.visible')
            .click()
});

Then(/^em seguida, a página inicial será exibida$/, () => {
	cy.scrollTo(0, 1700)
        cy.get('#input_comp-kwz6tqej')
            .type('Samuel Freitas')
        cy.get('#input_comp-kwz6tqf7')
           .type('samuel.sfdf@gmail.com')
        cy.get('#input_comp-kwz6tqfe')
           .type('41995670174')
        cy.get('#textarea_comp-kwz6tqfr')
           .type('teste teste teste teste teste')
        cy.get('[data-testid=input]')
          .click()
        cy.get('[data-testid=buttonElement]')
          .click()
          .should('be.visible', 'Obrigado!')
});




Given(/^que o site da verity foi acessado$/, () => {
	cy.viewport(1280, 800)
        cy.visit('https://www.verity.com.br/')
        cy.title()
});



When(/^localizo o titulo Nossas soluções_$/, () => {
	cy.scrollTo(0, 1500)
        cy.contains('Nossas soluções_')
            .should('be.visible')
            .click()
});


Then(/^tenho o retorno positivo$/, () => {
	return true;
});



Given(/^que o site da verity foi acessado$/, () => {
    cy.viewport(1280, 800)
    cy.visit('https://www.verity.com.br/')
    cy.title()
});


When(/^localizo o titulo Culture and Tech$/, () => {
	cy.scrollTo('bottom')
        cy.contains('PT')
          .should('be.visible')
          .click()
          cy.get('#comp-l0b60nwv-dropdown-option-1')
          .click()
        cy.scrollTo(0, 1400)
        cy.contains('Culture and Tech')
              .should('be.visible')
              .click()
});


Then(/^tenho o retorno positivo$/, () => {
	return true;
});
