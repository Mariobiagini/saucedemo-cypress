// ***********************************************
// Comandos customizados reutilizáveis
// ***********************************************

/**
 * Comando para realizar login
 * @param {string} username
 * @param {string} password
 */
Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
});

/**
 * Comando para adicionar o primeiro produto ao carrinho
 */
Cypress.Commands.add("addFirstProductToCart", () => {
  cy.get(".inventory_item").first().within(() => {
    cy.get("button").click();
  });
});
