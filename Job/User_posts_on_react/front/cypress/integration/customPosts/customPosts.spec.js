describe('user posts', () => {
    beforeEach(() => {
        cy.server()

        cy.visit('/customPosts')
    })

    it('should add new post', () => {
        cy.get('[role="add_post"]').click()
        cy.get('[role="input_title"]').type('Test')
        cy.get('[role="input_content"]').type('Complete')
        cy.get('[role="submit"]').click()
        cy.wait(1500);
        cy.get('div').contains('Complete')
    })

    it('should display custom posts', () => {
        cy.get('div').contains('Complete')
        cy.get('h3').contains('Test')
    });

    it('should open modal window', () => {
        cy.get('[role="content"]').contains('Complete').click()
        cy.get('[role="modal_container"]').contains('Test')
    })

    // it('should delete custom post', () => {
    //     cy.get('[role="delete_post"]').eq(3).click()
    //     cy.get('div').its('length').should('eq', 3)
    // })
})