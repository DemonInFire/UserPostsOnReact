describe('user posts', () => {
    beforeEach(() => {
        cy.server()

        cy.visit('/favorite')
    })

    it('should add new post', () => {
        cy.get('[role="add_post"]').click()
        cy.get('[role="modal_title"]').type('Test')
        cy.get('[role="modal_content"]').type('Complete')
        cy.get('[role="submit"]').click()
        cy.wait(1500);
        cy.visit('/customPosts')
        cy.get('div').contains('Complete')
    })
})