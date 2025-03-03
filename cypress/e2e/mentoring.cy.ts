describe('<MentoringPage />', () => {
  before(() => cy.visit('/mentoring'))

  it('display all error messages on form submission', () => {
    cy.get('[data-testid="button-submit"]').click()
    cy.get('[data-testid="error-message"]').should('have.length', 3)
  })
})
