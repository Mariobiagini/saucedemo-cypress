describe("CT02 - Login invalido", () => {
  it("deve exibir erro", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("usuario_invalido");
    cy.get('[data-test="password"]').type("senha_errada");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
  });
});