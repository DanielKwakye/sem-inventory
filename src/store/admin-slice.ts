import {createSlice} from "@reduxjs/toolkit";
import type {ProductStockModel} from "@/lib/types";

type AdminStateType = {
     selectedProductCategory: "shoes" | "phones" | "laptops" | "shirts"
     selectedProduct: ProductStockModel | undefined
}

const adminState:AdminStateType  = {
    selectedProductCategory: "shoes",
    selectedProduct: undefined,
};

const adminStateSlice = createSlice({
    name: "admin",
    initialState: adminState,
    reducers: {
        updateProductCategory: (state, action) => {
            state.selectedProductCategory = action.payload.category || state.selectedProductCategory;
        },
        updateSelectedProduct: (state, { payload } : { payload: { product: ProductStockModel }}) => {
            state.selectedProduct = payload.product || state.selectedProduct;
        },
    }
})

export const adminSliceActions = adminStateSlice.actions;
export default adminStateSlice.reducer;