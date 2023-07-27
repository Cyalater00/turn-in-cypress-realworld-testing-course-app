describe("User Journey", () => { //This is a test scenario described as the "User Journey." It represents a sequence of actions a user might take on a web page.
    it("a user can find a course on the home page and complete the courses lessons", () => { //we'll check if a user can find a course on the home page and complete its lessons.
      cy.visit("http://localhost:3000")
      cy.getByData("course-0").find("a").contains('Get started').click()
      cy.location("pathname").should("equal", "/testing-your-first-application") //We'll check if the current URL pathname is "/testing-your-first-application," which confirms that the user has reached the course's starting page.
      cy.getByData("next-lesson-button").click() // We'll find the button with the "data" attribute "next-lesson-button" and click it, moving to the next lesson.
      cy.location("pathname").should(
        "eq",
        "/testing-your-first-application/app-install-and-overview"
      )
  
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").should("exist").click()
      cy.location("pathname").should(
        "eq",
        "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
      )
  
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").should("exist").click()
      cy.location("pathname").should(
        "eq",
        "/testing-your-first-application/setting-up-data-before-each-test"
      )
      cy.getByData("challenge-answer-0").click()
      cy.getByData("next-lesson-button").should("exist").click() //We'll check if the current URL pathname is back to the home page ("/"), confirming the completion of the user's journey.
  
      cy.location("pathname").should("equal", "/")
    })
  })
  