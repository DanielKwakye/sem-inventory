import {createSlice} from "@reduxjs/toolkit";
import type { ProductStockModel} from "@/lib/types";

export type CartEventType = "add_to_cart" | "remove_cart_item" | "reduce_cart_item" | "clear_cart" | "checkout_completed" | "item_exceeded" | undefined

type CartStateType = {
    items: {id: number, product: ProductStockModel, quantity: number}[]
    totalQTy: number,
    subTotalPrice: number,
    totalPrice: number,
    taxAmount: number,
    discountAmount: number,
    event: CartEventType
}

const cartState: CartStateType = {
    items: [],
    totalQTy: 0,
    subTotalPrice: 0,
    totalPrice: 0,
    taxAmount: 0,
    discountAmount: 0,
    event: undefined,
};

const cartStateSlice = createSlice({
    name: "cart",
    initialState: cartState,
    reducers: {
        emitCartEvent: (state, { payload } : { payload: { event: CartEventType | undefined }}) => {
            state.event = payload.event;
        },
        addToCart: (
            state,
            { payload }: { payload: { item: ProductStockModel } }
        ) => {
            const product = payload.item;
            const existingItem = state.items.find((item) => item.id === product.id);

            const itemPrice = product.selling_price;
            const itemDiscount = (product.discount_perc / 100) * itemPrice;
            const itemTax = product.tax_value;

            if (existingItem) {
                // Check if cart quantity has reached stock limit
                if (existingItem.quantity >= product.quantity) {
                    state.event = "item_exceeded";
                    return;
                }

                // Increase quantity
                existingItem.quantity += 1;
            } else {
                if (product.quantity < 1) {
                    state.event = "item_exceeded";
                    return;
                }

                // Add new item
                state.items.push({
                    id: product.id,
                    product,
                    quantity: 1,
                });
            }

            // Update totals
            state.totalQTy += 1;
            state.subTotalPrice += itemPrice;
            state.discountAmount += itemDiscount;
            state.taxAmount += itemTax;
            state.totalPrice = state.subTotalPrice - state.discountAmount + state.taxAmount;

            // Set event
            state.event = "add_to_cart";
        },

        reduceCartItem: (
            state,
            { payload }: { payload: { item: ProductStockModel } }
        ) => {
            const product = payload.item;
            const existingItemIndex = state.items.findIndex(item => item.id === product.id);

            if (existingItemIndex > -1) {
                const existingItem = state.items[existingItemIndex];

                const itemPrice = product.selling_price;
                const itemDiscount = (product.discount_perc / 100) * itemPrice;
                const itemTax = product.tax_value;

                // Adjust totals before removing
                state.totalQTy = Math.max(0, state.totalQTy - 1);
                state.subTotalPrice = Math.max(0, state.subTotalPrice - itemPrice);
                state.discountAmount = Math.max(0, state.discountAmount - itemDiscount);
                state.taxAmount = Math.max(0, state.taxAmount - itemTax);

                // Decide whether to reduce quantity or remove item
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                    state.event = "reduce_cart_item";
                } else {
                    state.items.splice(existingItemIndex, 1);
                    state.event = "remove_cart_item";
                }

                // Recalculate total
                state.totalPrice = state.subTotalPrice - state.discountAmount + state.taxAmount;
            }
        },

        removeCartItem: (
            state,
            { payload }: { payload: { item: ProductStockModel } }
        ) => {
            const product = payload.item;
            const existingItemIndex = state.items.findIndex(item => item.id === product.id);

            if (existingItemIndex > -1) {
                const existingItem = state.items[existingItemIndex];
                const quantity = existingItem.quantity;

                const itemPrice = product.selling_price;
                const itemDiscount = (product.discount_perc / 100) * itemPrice;
                const itemTax = product.tax_value;

                // Remove item
                state.items.splice(existingItemIndex, 1);

                // Update totals (multiply by quantity since we're removing all at once)
                state.totalQTy = Math.max(0, state.totalQTy - quantity);
                state.subTotalPrice = Math.max(0, state.subTotalPrice - itemPrice * quantity);
                state.discountAmount = Math.max(0, state.discountAmount - itemDiscount * quantity);
                state.taxAmount = Math.max(0, state.taxAmount - itemTax * quantity);
                state.totalPrice = state.subTotalPrice - state.discountAmount + state.taxAmount;

                // Set event
                state.event = "remove_cart_item";
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQTy = 0;
            state.subTotalPrice = 0;
            state.discountAmount = 0;
            state.taxAmount = 0;
            state.totalPrice = 0;
            state.event = "clear_cart";
        }
    }
})

export const cartSliceActions = cartStateSlice.actions;
export default cartStateSlice.reducer;