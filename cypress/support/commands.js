// Comando para iniciar sesión
Cypress.Commands.add('login', (userType) => {
    cy.fixture('users').then((users) => {
      const user = users[userType];
      cy.get('[data-test=username]').type(user.username);
      cy.get('[data-test=password]').type(user.password);
      cy.get('[data-test=login-button]').click();
    });
  });
  
  // Comando para agregar productos al carrito
  Cypress.Commands.add('addProductsToCart', () => {
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
  });
  
  // Comando para ir al carrito
  Cypress.Commands.add('goToCart', () => {
    cy.get('[data-test=shopping-cart-link]').click();
  });
  
  // Comando para realizar el checkout
  Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.get('[data-test=checkout]').click();
    cy.get('[data-test=firstName]').type(firstName);
    cy.get('[data-test=lastName]').type(lastName);
    cy.get('[data-test=postalCode]').type(postalCode);
    cy.get('[data-test=continue]').click();
    
  });
  
  // Comando para validar el checkout
  Cypress.Commands.add('verifyCheckout', () => {
    cy.get('[data-test=complete-header]').should('contain', 'Thank you for your order!');
  });
  
  // Comando para realizar el logout
  Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test=logout-sidebar-link]').click();
  });
  