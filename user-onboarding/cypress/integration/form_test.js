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
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsInput = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get('button[id="submitBtn"')

    it('Name input functionality', () => {
        nameInput().type('James');
        nameInput().should('be.value', 'James');
    })
    it('Email input functionality', () => {
        emailInput().type('james@james.com');
        emailInput().should('be.value','james@james.com');
    })
    it('Password input functionality', () => {
        passwordInput().type('calvo');
        passwordInput().should('be.value','calvo');
    })
    it('Terms checkboxes functionality', () => {
        termsInput().click({multiple: true});
    })
    it('Submit button functionality', () => {
        nameInput().type('James');
        emailInput().type('james@james.com');
        passwordInput().type('calvo');
        termsInput().first().click();
        submitBtn().click();
    })
})