describe("CT03 e CT04 - Carrinho", () => {
  it("CT03 - Adicionar produto deve incrementar contador", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
    cy.get(".shopping_cart_badge").should("not.exist");
    cy.addFirstProductToCart();
    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "1");
  });

  it("CT04 - Produto deve aparecer no carrinho", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
    cy.addFirstProductToCart();
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".cart_item").should("have.length.greaterThan", 0);
  });
});