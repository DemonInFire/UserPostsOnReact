const serverUrl = Cypress.env('serverUrl')

describe('user posts', () => {
    beforeEach(() => {
        cy.server()
        cy.route('GET', `${serverUrl}/posts`).as('getAllPosts')

        cy.visit('/')
        cy.wait('@getAllPosts')
    })

    it('should display user posts', () => {
        cy.get('div').eq(0).contains('sunt')
        cy.get('h3').eq(5).contains('dolor')
    });

    it('should open modal window', () => {
        cy.get('[alt="watch"]').eq(6).click()
        cy.get('[role="modal_container"]').contains('magnam')
    })

    it('should find posts', () => {
        cy.get('[role="search"]').type('dolorem')
        cy.get('span').contains('dolorem')
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

    it('should add to favorite', () => {
        cy.get('[role="add_favorite"]').eq(12).click({force: true}) // I don't know why it doesn't appear
        cy.wait(1500);
        cy.visit('/favorite')
        // cy.get('div').contains('dolor')
    })

    it('should be draggable', () => {
        cy.get('[role="post_container"]').eq(1).trigger("mousedown", {button: 0}, {force: true}).trigger("mousemove", {bottom:500}, {force:true})
        cy.wait(1500)
        cy.get('[role="post_container"]').eq(5).trigger("mouseup", {force: true})
    })

})