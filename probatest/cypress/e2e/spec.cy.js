describe('Amina test', () => {
  beforeEach('Visit Home Page', () => {
    cy.visit('https://demo.nopcommerce.com/')
  })
  it('User registration', () => {
    cy.get('.ico-register').click()
    cy.get('.male').click()
    cy.get('#FirstName').type('Amina').should('have.value', 'Amina')
    cy.get('#LastName').type('Rondic').should('have.value', 'Rondic')
    cy.get('#Email').type('aminarondic11@gmail.com').should('have.value', 'aminarondic11@gmail.com')
    cy.get('#Password').type('amina123').should('have.value', 'amina123')
    cy.get('#ConfirmPassword').type('amina123').should('have.value', 'amina123')
    cy.get('#register-button').click()
  })
  it('Search functionality', () => {
    cy.get('#small-searchterms').click()
    cy.get('#small-searchterms').type('HTC One M8 Android L 5.0 Lollipop').should('have.value', 'HTC One M8 Android L 5.0 Lollipop')
    cy.get('#small-search-box-form > .button-1').click()
  })
  it('Search from Home Page and Adding to Cart', () => {
  cy.get('.notmobile > :nth-child(2) > [href="/electronics"]').click()
  cy.get(':nth-child(2) > .sub-category-item > .title > a').click()
  cy.get(':nth-child(1) > .product-item > .details > .product-title > a').click()
  cy.get('#add-to-cart-button-18').click()
})
})