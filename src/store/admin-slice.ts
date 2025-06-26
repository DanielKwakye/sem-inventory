import {createSlice} from "@reduxjs/toolkit";
import type {ProductStockModel} from "@/lib/types";

export type AdminEventType = "product_added" | "product_removed" | "product_updated"

type AdminStateType = {
     selectedProductCategory: "shoes" | "phones" | "laptops" | "shirts"
     selectedProduct: ProductStockModel | undefined,
     event:  AdminEventType | undefined,
}

const adminState:AdminStateType  = {
    selectedProductCategory: "shoes",
    selectedProduct: undefined,
    event: undefined
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
        emitProductEvent: (state, { payload } : { payload: { event: AdminEventType | undefined }}) => {
            state.event = payload.event;
        }

    }
})

export const adminSliceActions = adminStateSlice.actions;
export default adminStateSlice.reducer;