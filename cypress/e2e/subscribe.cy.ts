describe("Newsletter Subscribe Form", () => { //This is a set of tests that focus on the "Newsletter Subscribe Form" on a web page.
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    it("allows users to subscribe to the email list", () => { //We want to test if users can successfully subscribe to the email list.
      cy.getByData("email-input").type("tom@aol.com") // We'll find the input field with a special "data" attribute called "email-input" and type in the email address
      cy.getByData("submit-button").click() //We'll find the button with a special "data" attribute called "submit-button" and click it to submit the form
      cy.getByData("success-message").should("exist").contains("tom@aol.com") // we check if a success message display on page
    })
  
    it("does NOT allow an invalid email address", () => { //Now, we want to check if the form prevents invalid email addresses from subscribing.
      cy.getByData("email-input").type("tom")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("not.exist")//We'll check if a success message does not displayed on the page.
    })
  
    it("does NOT allow already subscribed email addresses", () => {
      cy.getByData("email-input").type("john@example.com")// we check if email address alreay subscribed.
      cy.getByData("submit-button").click()
      cy.getByData("server-error-message")
        .should("exist")
        .contains("already exists. Please use a different email address.")// we indicate that email already subscibred print out error.
    })
  })
  
  