context('Actions', () => {
    before(() => {
        cy.visit('/')
    })

    it('should has form', () => {
        cy.get('input').should('have.value', '')
    });

    it('Adds new todo', () => {
        cy.wait(2000)
        cy.get('input.task-create-input').type('Task1', {delay: 1000})
        cy.wait(2000)
        cy.get('button.task-create-btn').click()
        cy.wait(2000)
    });

    it('Finds the new task', () => {
        cy.wait(2000)
        cy.get('p.new-section-title').should('have.text', 'Task1')
        cy.wait(2000)
    })

    it('should delete task', () => {
        cy.wait(2000)
        cy.get('.section').should('have.length', 1)
        cy.wait(2000)
        cy.get('.section .deleteSection').click()
        cy.wait(2000)
        cy.get('.section').should('have.length', 0)
    })
})