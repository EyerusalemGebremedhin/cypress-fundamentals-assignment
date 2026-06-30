describe('Part F: Working with Elements Suite', () => {

  beforeEach(() => {
    cy.visit('blogspot.com');
  });

  it('Interacts with and verifies all nine required element types', () => {
    cy.get('button.onclick, button[onclick="myFunction()"]').first().click();
    cy.get('#sunday').check().should('be.checked');
    cy.get('#male').check().should('be.checked');
    cy.get('#name').clear().type('Jane Doe').should('have.value', 'Jane Doe');
    cy.get('#email').clear().type('jane@example.com').should('have.value', 'jane@example.com');
    cy.get('#country').select('Japan').should('have.value', 'japan');
    cy.get('#textarea').clear().type('Automating a long paragraph comment section.').should('have.value', 'Automating a long paragraph comment section.');
    cy.get('a.wikipedia-search-wiki-link').should('have.attr', 'target', '_blank');
    cy.get('img.wikipedia-icon').should('be.visible');
  });
});