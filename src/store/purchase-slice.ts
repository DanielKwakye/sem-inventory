import {createSlice} from "@reduxjs/toolkit";
import type {ProductStockModel} from "@/lib/types";

type PurchaseStateType = {
    cart: {id: number, product: ProductStockModel, quantity: number}[]
}

const purchaseState: PurchaseStateType = {
    cart: []
};

const purchaseStateSlice = createSlice({
    name: "purchase",
    initialState: purchaseState,
    reducers: {
        // updateAuthState: (state, action) => {
        //     state.userRole = action.payload.userRole || state.userRole;
        // },
        // logout: (state) => {
        //     state.userRole = undefined
        // },
    }
})

export default purchaseStateSlice.reducer;