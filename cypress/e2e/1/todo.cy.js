/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("fonRadarTest", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("falseLogin", () => {
    cy.get("#formEmail").type("Kaitlin30");
    cy.get("#password").type("Kaitlin30");
    cy.get("#loginButton").click();
    cy.wait(1000);
  });

  it("trueLogin", () => {
    cy.get("#formEmail").type("Kole.White25");
    cy.get("#password").type("eJDFhFLUt0poysB");
    cy.get("#loginButton").click();
    cy.get("#addNewCustomer").click();
    cy.get("#companyName").type("Cypress Test Company");
    cy.get("#taxNumber").type("010101");
    cy.get("#taxOffice").type("Cypress Test Office");
    cy.get("#contactNumber").type("905302837676");
    cy.get("#invoiceCount").type("87689");
    cy.get("#saveChanges").click();
    cy.get("#searchText").type("Cypress Test Company");
  });
});
