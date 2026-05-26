/// <reference types="cypress" />

describe("CT03 e CT04 - Carrinho de Compras", () => {
  beforeEach(() => {
    // Realiza login antes de cada teste usando o comando customizado
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("CT03 - Adicionar produto ao carrinho deve incrementar o contador", () => {
    // Verifica que o contador está zerado ou ausente inicialmente
    cy.get(".shopping_cart_badge").should("not.exist");

    // Adiciona o primeiro produto disponível
    cy.addFirstProductToCart();

    // Verifica que o contador do carrinho foi para 1
    cy.get(".shopping_cart_badge")
      .should("be.visible")
      .and("have.text", "1");
  });

  it("CT04 - Produto adicionado deve aparecer listado no carrinho", () => {
    // Captura o nome do produto antes de adicionar
    cy.get(".inventory_item_name").first().invoke("text").as("productName");

    // Adiciona o produto ao carrinho
    cy.addFirstProductToCart();

    // Navega para o carrinho
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");

    // Verifica que o produto está no carrinho com o nome correto
    cy.get("@productName").then((name) => {
      cy.get(".cart_item .inventory_item_name")
        .should("be.visible")
        .and("have.text", name);
    });

    // Verifica que existe pelo menos 1 item no carrinho
    cy.get(".cart_item").should("have.length.greaterThan", 0);
  });
});
