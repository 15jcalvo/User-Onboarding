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

    it('Name input test', () => {
        nameInput().type('James');
        nameInput().should('be.value', 'James');
    })
    it('Email input test', () => {
        emailInput().type('james@james.com');
        emailInput().should('be.value','james@james.com');
    })
    it('Password input test', () => {
        passwordInput().type('calvo');
        passwordInput().should('be.value','calvo');
    })
    it('Terms checkboxes test', () => {
        termsInput().click({multiple: true});
    })
    it('Submit button test', () => {
        nameInput().type('James');
        emailInput().type('james@james.com');
        passwordInput().type('calvo');
        termsInput().first().click();
        submitBtn().click();
    })
    it('Form validation test', () => {
        nameInput().type('a');
        cy.contains('Username must be 3 characters').should('exist');
        emailInput().type('a');
        cy.contains('Must be a valid email address').should('exist');
        passwordInput().type('a');
        cy.contains('Password must be 3 characters').should('exist');
        termsInput().last().click();
        cy.contains('Must accept terms').should('exist');
    })
})