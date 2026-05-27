describe("CT01 e CT02 - Autenticacao", () => {
  it("CT01 - Login valido deve redirecionar para produtos", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
  });

  it("CT02 - Login invalido deve exibir erro", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get('[data-test="username"]').type("usuario_invalido");
    cy.get('[data-test="password"]').type("senha_errada");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').shoul

$content = @'
describe("CT01 e CT02 - Autenticacao", () => {
  it("CT01 - Login valido deve redirecionar para produtos", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
  });

  it("CT02 - Login invalido deve exibir erro", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get('[data-test="username"]').type("usuario_invalido");
    cy.get('[data-test="password"]').type("senha_errada");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
  });
});