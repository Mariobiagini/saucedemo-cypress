/// <reference types="cypress" />

describe("CT01 e CT02 - Autenticação", () => {
  it("CT01 - Login válido deve redirecionar para produtos", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
  });

  it("CT02 - Login inválido deve exibir erro", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("usuario_invalido");
    cy.get('[data-test="password"]').type("senha_errada");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
  });
});
