describe("CT04 - Carrinho", () => {
  it("produto deve aparecer no carrinho", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
    cy.addFirstProductToCart();
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".cart_item").should("have.length.greaterThan", 0);
  });
});