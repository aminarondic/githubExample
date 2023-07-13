describe('Amina test', () => {
    beforeEach('Visit Home Page', () => {
   cy.visit('https://demo.nopcommerce.com/')
  })
  
    it('Pretrazivanje artikla i dodavanje u korpu', () => {
      cy.get('#small-searchterms').click().type('Apple MacBook Pro 13-inch')
      cy.get('#small-search-box-form > .button-1').click()
      cy.get('.product-title > a').contains('Apple MacBook Pro 13-inch')
      cy.get('.product-box-add-to-cart-button').click()
    })
    it('Pretrazivanje sa Search stranice i pretrazivanje koristeci filtere za kategorije', () => {
      cy.get('#small-searchterms').type('Digital Storm VANQUISH 3 Custom Performance PC')
      cy.get('#small-search-box-form > .button-1').click()
      cy.get('.product-title > a').should('have.text', 'Digital Storm VANQUISH 3 Custom Performance PC')
      cy.get('#q').clear().type('Apple MacBook Pro 13-inch')
      cy.get('.buttons > .button-1').click()
      cy.get('.product-title > a').should('have.text', 'Apple MacBook Pro 13-inch')
      cy.get('.block-category-navigation > .listbox > .list > :nth-child(1) > a').click()
      cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click()
      cy.get(':nth-child(1) > .product-item > .details > .product-title > a').should('have.text', 'Apple MacBook Pro 13-inch')
  })
  })