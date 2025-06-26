import {createSlice} from "@reduxjs/toolkit";

type CustomerStateType = {
    selectedProductCategory: "shoes" | "phones" | "laptops" | "shirts";
}

const customerState: CustomerStateType = {
    selectedProductCategory: "shoes",
};

const customerStateSlice = createSlice({
    name: "customer",
    initialState: customerState,
    reducers: {
        updateProductCategory: (state, action) => {
            state.selectedProductCategory = action.payload.category || state.selectedProductCategory;
        },
    }
})

export const customerSliceActions = customerStateSlice.actions;
export default customerStateSlice.reducer;