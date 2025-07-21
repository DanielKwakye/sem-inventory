const productTitle = "Airforce red jordan"

function reduceUntilZero(){
    return cy.get('#stockQty-2').invoke('text').then((text) => {
        const qty = parseInt(text);

        if (qty > 0) {
            return cy.get('#subStockQuantity-2')
                .click()
                .then(() => reduceUntilZero()); // ✅ recurse with return
        } else {
            return cy.get('#subStockQuantity-2')
                .click()
                .wait(1000)
                .get('#stockQty-2')
                .invoke('text')
                .then((finalText) => {
                    const finalQty = parseInt(finalText);
                    expect(finalQty).to.eq(0);
                });
        }
    });
}

describe('Stock Management', () => {

    before(() => {
        cy.loginAsAdmin(); // Uses your custom Cypress command
    });

    it('E2E Stock test', () => {
        cy.get('#stockQty-2').invoke('text').then((initialText) => {
            const initialQty = parseInt(initialText);

            // increase the quantity to 10
            const clicks = 10;
            Cypress._.times(clicks, () => {
                cy.get('#addStockQuantity-2').click();
            });

            cy.wait(2000);

            reduceUntilZero().then(() => {

                cy.wait(1000);

                /////  Add Stock ------------------------- /////////
                cy.get('#stockQty-2').invoke('text').then((initialText) => {

                    cy.get('#addStockQuantity-2').click();

                    cy.get('#stockQty-2').invoke('text').then((updatedText) => {
                        const updatedQty = parseInt(updatedText);
                        expect(updatedQty).to.eq(1);

                        cy.wait(2000); // allow backend to update

                        //// ---- Switch to Customer ------////
                        cy.get("#customer-nav-item").click()
                        cy.wait(2000);
                        cy.get("#customer-product-2").click();

                        // ✅ Expect 1 item added to cart
                        cy.wait(2000);
                        cy.get('#cartItem-2').should('exist'); // checks that item was added

                        cy.get("#place-order-button").click(); // Assuming this clears the cart

                        // ✅ Expect cart is empty
                        cy.wait(2000); // optional, depending on how fast cart clears
                        cy.get('[id^="cartItem-"]').should('not.exist'); // checks no cart items remain

                        cy.wait(2000);
                        //// ---- Switch back to Admin ------////
                        cy.get("#admin-nav-item").click()

                        cy.get('#stockQty-2').invoke('text').then((updatedText) => {
                            const updatedQty = parseInt(updatedText);
                            expect(updatedQty).to.eq(0);
                        })

                    });
                });


            });


        });
    });



});
