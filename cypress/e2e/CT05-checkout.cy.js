/// <reference types="cypress" />

describe("CT05 - Fluxo Completo de Checkout", () => {
  beforeEach(() => {
    // Login e adiciona produto ao carrinho
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
    cy.addFirstProductToCart();
  });

  it("CT05 - Finalizar compra deve exibir mensagem de confirmação", () => {
    // Passo 1: Acessa o carrinho
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".cart_item").should("have.length", 1);

    // Passo 2: Inicia o checkout
    cy.get('[data-test="checkout"]').click();
    cy.url().should("include", "/checkout-step-one.html");

    // Passo 3: Preenche os dados pessoais
    cy.get('[data-test="firstName"]').type("João");
    cy.get('[data-test="lastName"]').type("Silva");
    cy.get('[data-test="postalCode"]').type("30130-010");
    cy.get('[data-test="continue"]').click();

    // Passo 4: Verifica o resumo do pedido
    cy.url().should("include", "/checkout-step-two.html");
    cy.get(".cart_item").should("have.length", 1);
    cy.get(".summary_total_label").should("be.visible");

    // Passo 5: Finaliza a compra
    cy.get('[data-test="finish"]').click();
    cy.url().should("include", "/checkout-complete.html");

    // Verifica mensagem de sucesso
    cy.get(".complete-header")
      .should("be.visible")
      .and("have.text", "Thank you for your order!");

    cy.get(".complete-text").should("be.visible");

    // Verifica que o botão de voltar ao início está disponível
    cy.get('[data-test="back-to-products"]').should("be.visible");
  });
});
