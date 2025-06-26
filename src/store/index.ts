import {configureStore} from "@reduxjs/toolkit";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authSlice from "@/store/auth-slice.ts";
import adminSlice from "@/store/admin-slice.ts";
import customerSlice from "@/store/customer-slice.ts";
import cartSlice from "@/store/cart-slice.ts";

const store = configureStore({
    reducer: {
        auth: authSlice,
        admin: adminSlice,
        customer: customerSlice,
        cart: cartSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store