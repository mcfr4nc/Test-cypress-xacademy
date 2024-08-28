describe('Compra en Sauce Demo', () => {
  beforeEach(() => {
    // Solo se visita la página una vez antes de todas las pruebas
    cy.visit('https://www.saucedemo.com/')
  })
  
  it('Compra con usuario 1 (standard_user)', () => {
    cy.login('standard_user')
    cy.addProductsToCart()
    cy.goToCart()
    cy.checkout('Franco', 'Osuna', '1234')
    cy.get('[data-test=finish]').click()
    cy.verifyCheckout()
    cy.get('[data-test=back-to-products]').click()
    cy.logout()
  })
  
  it('Compra con usuario 2 (problem_user)', () => {
    cy.login('problem_user')
    cy.addProductsToCart()
    cy.goToCart()
    cy.checkout('Franco', 'Osuna', '1234')
    cy.logout()
  })
  })
