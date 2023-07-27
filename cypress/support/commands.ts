//imports Cypress to allow using it in the test file.
/// <reference types="cypress" /> 

//Defines a new custom command called "getByData" that accepts a selector parameter
//
Cypress.Commands.add("getByData", (selector)=> {
    return cy.get(`[data-test=${selector}]`)
})