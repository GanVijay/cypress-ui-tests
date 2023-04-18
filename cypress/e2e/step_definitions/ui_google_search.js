/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

/** UI tests */

Given("I navigate to Google", function () {
  cy.visit('/')
  cy.title().should('include', 'Google')
  cy.get('#L2AGLb > .QS5gu').click() 
});

When('I search for dogs', function () {
  cy.get('#APjFqb').type('dogs')
  cy.get('.FPdoLc > center > .gNO89b').click()
})

Then('I expect to see results for dogs', () => {
  cy.title().should('include', 'dogs ')
  cy.get('.yKMVIe').contains('Dog').should('be.visible')
})
