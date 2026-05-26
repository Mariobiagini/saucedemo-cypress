javascript/// <reference types="cypress" />

describe("CT03 e CT04 - Carrinho de Compras", () => {
  it("CT03 - Adicionar produto ao carrinho deve incrementar o contador", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");

    cy.get(".shopping_cart_badge").should("not.exist");
    cy.addFirstProductToCart();

    cy.get(".shopping_cart_badge")
      .should("be.visible")
      .and("have.text", "1");
  });

  it("CT04 - Produto adicionado deve aparecer listado no carrinho", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");

    cy.get(".inventory_item_name").first().invoke("text").as("productName");
    cy.addFirstProductToCart();

    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");

    cy.get("@productName").then((name) => {
      cy.get(".cart_item .inventory_item_name")
        .should("be.visible")
        .and("have.text", name);
    });

    cy.get(".cart_item").should("have.length.greaterThan", 0);
  });
});