/// <reference types="Cypress" />

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length', 5)

        //this is checking .product in the full page
        cy.get('.product:visible').should('have.length', 4)

        //Parent child chaining
        cy.get('.products').as('productLocator')  // alias created lie sql
        cy.get('@productLocator').find('.product').should('have.length', 4)
        // cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        //without increment------------
        // cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () {
        //     console.log('sf')
        // })

        //with increment-----------
        cy.get('@productLocator').find('.product').eq(2).within(() => {
            cy.get('.increment').click(); // Click the increment button
            cy.contains('ADD TO CART').click(); // Click the ADD TO CART button
        }).then(function () {
            console.log('sf');
        });
        

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        //this is to print in logs***
        // cy.get('.brand').then(function(logoelement)
        // {
        //     cy.log(logoelement.text())
        // })

        cy.get('.brand').then((logoelement) => {
            cy.log(logoelement.text());
        });

        //this checs both first prints then asserts******
        // cy.get('.brand').then((logoelement) => {
        //     const actualText = logoelement.text();
        //     cy.log(actualText); // Log the actual text
        //     return actualText; // Return the text for the next chained command
        // }).should('eq', 'GREENKART'); // Assert the text value


        //const logo=cy.get('.brand')
        //cy.log(cy.get('.brand').text())
        // cy.log(logo.text())
    })



})