describe("Home page", () => { // This is the beginning of the test suite description. The test suite is named "Home page."
  beforeEach(() => { //This sets up a "beforeEach" hook, which means that the specified function will run before each test in this suite.
    cy.visit("http://localhost:3000") //This command uses Cypress to visit the specified URL "http://localhost:3000,"
  })

  context("Hero section", () => { //This begins a new context for tests related to the "Hero section" of the home page.
    it("the h1 contains the correct text", () => { // This starts a test case with the description "the h1 contains the correct text."
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress" // This line finds an element with the data attribute "hero-heading" and checks if it contains the specified text "Testing Next.js Applications with Cypress."
      )
    })

    it("the features on the homepage are correct", () => { //test case with the description "the features on the homepage are correct."
      cy.get("dt").eq(0).contains("4 Courses") //This line finds the first "dt" (definition list term) element on the page and checks if it contains the text "4 Courses
      cy.get("dt").eq(1).contains("25+ Lessons") //checks if it contains the text "25+ Lessons."
      cy.get("dt").eq(2).contains("Free and Open Source") //checks if it contains the text "Free and Open Source."
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => { 
      cy.getByData("course-0").find("a").contains("Get started").click() //This line finds an element with the data attribute "course-0," then finds an anchor element ("a") within it that contains the text "Get started," and simulates a click on it.
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    //This line checks if the current URL pathname is equal to "/testing-your-first-application," which confirms that the click from the previous step navigated to the expected page.
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})

