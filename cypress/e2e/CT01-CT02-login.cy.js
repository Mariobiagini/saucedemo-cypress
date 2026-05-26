javascript/// <reference types="cypress" />

describe("CT01 e CT02 - Autenticação", () => {
  it("CT01 - Login com credenciais válidas deve redirecionar para listagem de produtos", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
  });

  it("CT02 - Login com credenciais inválidas deve exibir mensagem de erro", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("usuario_invalido");
    cy.get('[data-test="password"]').type("senha_errada");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Username and password do not match");

    cy.url().should("eq", "https://www.saucedemo.com/");
  });
});