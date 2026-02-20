describe('Cypress Practice Playground', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl') || 'http://localhost:5173')
  })

  it('renders the core sections', () => {
    cy.get('[data-cy="page-title"]').should('contain', 'Cypress Practice Playground')
    cy.get('[data-cy="form-section"]').should('exist')
    cy.get('[data-cy="counter-section"]').should('exist')
    cy.get('[data-cy="todo-section"]').should('exist')
    cy.get('[data-cy="async-section"]').should('exist')
  })

  it('validates and submits the form', () => {
    cy.get('[data-cy="email-input"]').type('invalid-email')
    cy.get('[data-cy="password-input"]').type('123')
    cy.get('[data-cy="submit-button"]').click()

    cy.get('[data-cy="email-error"]').should('contain', 'Email must include @')
    cy.get('[data-cy="password-error"]').should('contain', 'at least 6 characters')
    cy.get('[data-cy="submit-status"]').should('contain', 'Fix form errors')

    cy.get('[data-cy="name-input"]').clear().type('Abish')
    cy.get('[data-cy="email-input"]').clear().type('abish@example.com')
    cy.get('[data-cy="password-input"]').clear().type('secret1')
    cy.get('[data-cy="role-select"]').select('Developer')
    cy.get('[data-cy="submit-button"]').click()
    cy.get('[data-cy="submit-status"]').should('contain', 'Please accept terms')

    cy.get('[data-cy="terms-checkbox"]').check()
    cy.get('[data-cy="submit-button"]').click()
    cy.get('[data-cy="submit-status"]').should('contain', 'Submitted for Abish as developer')
  })

  it('updates the counter', () => {
    cy.get('[data-cy="counter-value"]').should('contain', 'Count: 0')

    cy.get('[data-cy="increment-button"]').click().click()
    cy.get('[data-cy="counter-value"]').should('contain', 'Count: 2')

    cy.get('[data-cy="decrement-button"]').click()
    cy.get('[data-cy="counter-value"]').should('contain', 'Count: 1')

    cy.get('[data-cy="reset-button"]').click()
    cy.get('[data-cy="counter-value"]').should('contain', 'Count: 0')
  })

  it('adds and removes todo items', () => {
    cy.get('[data-cy="todo-input"]').type('Write Cypress tests')
    cy.get('[data-cy="add-todo-button"]').click()

    cy.get('[data-cy="todo-input"]').type('Review assertions')
    cy.get('[data-cy="add-todo-button"]').click()

    cy.get('[data-cy="todo-item"]').should('have.length', 2)
    cy.get('[data-cy="todo-list"]').should('contain', 'Write Cypress tests')
    cy.get('[data-cy="todo-list"]').should('contain', 'Review assertions')

    cy.get('[data-cy="todo-item"]').first().find('[data-cy="remove-todo-button"]').click()
    cy.get('[data-cy="todo-item"]').should('have.length', 1)
  })

  it('loads async user data', () => {
    cy.clock()
    cy.get('[data-cy="load-users-button"]').click()

    cy.get('[data-cy="loading-text"]').should('be.visible')
    cy.tick(700)

    cy.get('[data-cy="loading-text"]').should('not.exist')
    cy.get('[data-cy="user-item"]').should('have.length', 3)
    cy.get('[data-cy="user-list"]').should('contain', 'Alice')
    cy.get('[data-cy="user-list"]').should('contain', 'Bob')
    cy.get('[data-cy="user-list"]').should('contain', 'Charlie')
  })
})
