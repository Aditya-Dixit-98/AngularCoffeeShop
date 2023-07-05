describe('CheckElementExists spec', () => {
    it('passes', () => {
        cy.visit('http://localhost:4200/')
        cy.get('div').should('have.class','mat-mdc-card-header-text')
      })
     
  })