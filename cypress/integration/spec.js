// / <reference types="Cypress" />

context('Location', () => {
  it('cy.location() - get window.location', () => {
    cy.visit('local.candidco.com:3000', { timeout: 30000 });
    // https://on.cypress.io/location
    cy.location().should(location => {
      expect(location.host).to.eq('local.candidco.com:3000');
    });
  });
});
