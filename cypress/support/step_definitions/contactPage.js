import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../pages/homepage'

Given('que estou na página inicial', () => {
  HomePage.visit()
})

When('eu clico no link {string} no menu', (linkText) => {
  if (linkText === 'Soluções') {
    HomePage.clickSolucoes()
  } else if (linkText === 'Culture and Tech') {
    HomePage.clickCultureTech()
  }
})

Then('eu devo ver o título {string}', (titulo) => {
  HomePage.getTitulo().should('have.text', titulo)
})

  