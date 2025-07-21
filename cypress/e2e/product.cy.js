describe('Add Product Functionality', () => {

    before(() => {
        cy.loginAsAdmin(); // Uses your custom Cypress command
    })

    it('AP01 - Adds valid product as Admin', () => {
        cy.visit('/'); // Replace with real path

        cy.contains('Add new product').click();

        cy.get('input[type="file"]').selectFile('cypress/fixtures/sample.jpg', { force: true });
        cy.get('#title').type('iPhone 14');
        cy.get('#cost_price').type('440.00');
        cy.get('#selling_price').type('500.00');
        cy.get('#tax_value').type('30.00');
        cy.get('#discount_perc').type('5');
        cy.get('#quantity').type('20');

        cy.contains('Submit').click();
        cy.contains('Product added successfully!').should('exist');
    });

});


describe('Should fail if product has no name', () => {

    before(() => {
        cy.loginAsAdmin(); // Uses your custom Cypress command
    })

    it('AP02 - Fails to add product without name', () => {
        cy.visit('/');
        cy.contains('Add new product').click();

        cy.get('input[type="file"]').selectFile('cypress/fixtures/sample.jpg', { force: true });
        cy.get('#cost_price').type('49.99');
        cy.get('#selling_price').type('59.99');
        cy.get('#tax_value').type('2.00');
        cy.get('#discount_perc').type('5');
        cy.get('#quantity').type('10');

        cy.contains('Submit').click();
        cy.get('div.text-red-700').should('contain.text', 'Title is required');
    });


});

describe('Should fail if product price is negative', () => {

    before(() => {
        cy.loginAsAdmin(); // Uses your custom Cypress command
    })

    it('AP04 - Fails to add product with negative price', () => {
        cy.visit('/');
        cy.contains('Add new product').click();

        cy.get('input[type="file"]').selectFile('cypress/fixtures/sample-product-1.avif', { force: true });
        cy.get('#title').type('Shoes');
        cy.get('#cost_price').type('-5.99');
        cy.get('#selling_price').type('10.00');
        cy.get('#tax_value').type('1.00');
        cy.get('#discount_perc').type('0');
        cy.get('#quantity').type('5');

        cy.contains('Submit').click();
        cy.get('div.text-red-700').should('exist'); // Add message if specific
    });


});
