describe("CT03 - Carrinho", () => {
  it("adicionar produto deve incrementar contador", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
    cy.get(".shopping_cart_badge").should("not.exist");
    cy.addFirstProductToCart();
    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "1");
  });
});