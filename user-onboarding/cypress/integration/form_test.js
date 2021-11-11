describe('User onboarding app', () => {
    it('function check', () => {
        expect(true).to.equal(true)
    })
    // start with fresh state
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    //Helpers
    const nameInput = () => cy.get('input[name=name]');

    it('Name input functionality', () => {
        nameInput().type('James');
        nameInput().should('be.value', 'James');
    })
})