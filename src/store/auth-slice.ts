import {createSlice} from "@reduxjs/toolkit";

const authState: { userRole: "admin" | "customer" | undefined } = {
    userRole: undefined
};

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        updateAuthState: (state, action) => {
            state.userRole = action.payload.userRole || state.userRole;
        },
        logout: (state) => {
            state.userRole = undefined
        },
    }
})

export const { updateAuthState, logout } = authSlice.actions;
export default authSlice.reducer;
