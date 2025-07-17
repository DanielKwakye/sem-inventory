describe('Login Spec - Authorized Access', () => {
    it('Allows authorized admin to login', () => {
        cy.visit('https://inventory-sem-3-mun.web.app');
        cy.wait(2000);

        // Click on the Admin login button
        cy.contains('Admin').click();
        cy.wait(2000);

        // Wait for input and type password
        cy.get('#password').should('be.visible').type('123456');
        cy.wait(2000);

        // Click the submit button
        cy.get("button[type='submit']").click();
        cy.wait(2000);

        // Assert URL includes admin dashboard path
        cy.url().should('include', '/account/admin');

    });
});

describe('Login Spec - Unauthorized Access', () => {
    it('Prevents unauthorized admin from logging in', () => {
        cy.visit('https://inventory-sem-3-mun.web.app');
        cy.wait(1000); // optional slow for demo

        cy.contains('Admin').click();
        cy.wait(1000);

        // Use an incorrect password
        cy.get('#password').should('be.visible').type('wrongpassword');
        cy.get("button[type='submit']").click();

        // Expect to stay on login page and see error message
        cy.get('div.text-red-700')
            .should('be.visible')
            .and('contain.text', ''); // <-- optionally assert message if known

        // Optionally ensure URL does NOT change to dashboard
        cy.url().should('not.include', '/account/admin');
    });
});