describe('CheckButtonClick spec', () => {
    it('passes', () => {
        cy.visit('http://localhost:4200/')
        cy.get('button').should('have.class','mat-mdc-paginator-navigation-previous')
      })
     
  })