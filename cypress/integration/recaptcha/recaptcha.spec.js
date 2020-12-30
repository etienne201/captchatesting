  
/// <reference types="cypress" />

context('Payunit testing dashboard', () => {
  beforeEach(() => {
    // uses base url setting from cypress.json
    // which right now points at "localhost:4200"
    cy.visit('http://127.0.0.1:5500/index.html')
  })
  describe('login recaptcha Registration  ',()=>{
    it('Login user', () => {
      
      cy.get('#x1') 
      .type('joe ')
      cy.get('#x2')
      .type('emako')
      cy.get('#x3')
      .type('joeemako3@gmail.com')
      cy.get('#x4')
      .type('my first recaptcha')
      cy.get('x5').click()
      
      
       
    })
    it('Login user', () => {
      
      cy.get('iframe')
      .first()
      .its('0.contentDocument.body')
      .should('not.be.undefined')
      .and('not.be.empty')
      .then(cy.wrap)
      .find('#recaptcha-anchor')
      .should('be.visible')
      .click();
      
       
    })
    
    
    
  })
  
  })
  