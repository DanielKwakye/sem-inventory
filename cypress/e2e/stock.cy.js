const productTitle = "Airforce red jordan"

describe('Stock Management', () => {

    before(() => {
        cy.loginAsAdmin(); // Uses your custom Cypress command
    });

    it('AS01 - Adds stock via "+" button', () => {
        cy.get('#stockQty-1').invoke('text').then((initialText) => {
            const initialQty = parseInt(initialText);

            cy.get('#addStockQuantity-1').click();
            cy.wait(2000); // allow backend to update

            cy.get('#stockQty-1').invoke('text').then((updatedText) => {
                const updatedQty = parseInt(updatedText);
                expect(updatedQty).to.eq(initialQty + 1);
            });
        });
    });

    // it('RS01 - Reduces stock via "-" button', () => {
    //     cy.get('#stockQty-1').invoke('text').then((initialText) => {
    //         const initialQty = parseInt(initialText);
    //         if (initialQty < 1) return;
    //
    //         cy.get('#subStockQuantity-1').click();
    //         cy.wait(2000);
    //
    //         cy.get('#stockQty-1').invoke('text').then((updatedText) => {
    //             const updatedQty = parseInt(updatedText);
    //             expect(updatedQty).to.eq(initialQty - 1);
    //         });
    //     });
    // });

    //
    // it('RS02 - Prevents reducing stock below zero', () => {
    //     function reduceUntilZero() {
    //         cy.get('#stockQty-1').invoke('text').then((text) => {
    //             const qty = parseInt(text);
    //             if (qty > 0) {
    //                 cy.get('#subStockQuantity-1').click();
    //                 cy.wait(2000);
    //                 reduceUntilZero();
    //             } else {
    //                 cy.get('#subStockQuantity-1').click(); // Try one more time
    //                 cy.wait(2000);
    //                 cy.get('#stockQty-1').invoke('text').then((finalText) => {
    //                     const finalQty = parseInt(finalText);
    //                     expect(finalQty).to.eq(0);
    //                 });
    //             }
    //         });
    //     }
    //
    //     reduceUntilZero();
    // });
    //
    // it('AS05 - Adds large quantity repeatedly', () => {
    //     cy.get('#stockQty-1').invoke('text').then((initialText) => {
    //         const initialQty = parseInt(initialText);
    //         const clicks = 15;
    //
    //         Cypress._.times(clicks, () => {
    //             cy.get('#addStockQuantity-1').click();
    //             cy.wait(2000);
    //         });
    //
    //         cy.wait(1000);
    //         cy.get('#stockQty-1').invoke('text').then((finalText) => {
    //             const finalQty = parseInt(finalText);
    //             expect(finalQty).to.be.gte(initialQty + clicks);
    //         });
    //     });
    // });
});
