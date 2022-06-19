import { createSlice } from "@reduxjs/toolkit";

const accountSlice =  createSlice({
    name: "account",
    initialState: {email: null, isSignin: false},
    reducers: {
        signin: (state, action) => {
            state.isSignin = true;
            state.email = action.payload.email;
        },
        signout: (state, action) => {
            state.isSignin = false;
            state.email = null;
        }
    }

})

export const { signin, signout } = accountSlice.actions;

export default accountSlice.reducer;