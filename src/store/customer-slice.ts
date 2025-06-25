import {createSlice} from "@reduxjs/toolkit";
import type {ProductStockModel} from "@/lib/types";

type CustomerStateType = {
    selectedProductCategory: "shoes" | "phones" | "laptops" | "shirts";
    selectedProduct: ProductStockModel | undefined
}

const customerState: CustomerStateType = {
    selectedProductCategory: "shoes",
    selectedProduct: undefined
};

const customerStateSlice = createSlice({
    name: "customer",
    initialState: customerState,
    reducers: {
        // updateAuthState: (state, action) => {
        //     state.userRole = action.payload.userRole || state.userRole;
        // },
        // logout: (state) => {
        //     state.userRole = undefined
        // },
    }
})

export const customerSliceActions = customerStateSlice.actions;
export default customerStateSlice.reducer;