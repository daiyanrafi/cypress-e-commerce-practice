/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //to check if the hover is showing or not
        // cy.get('div.mouse-hover-content').invoke('show')   

        //this clicks without hovering
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    })
})