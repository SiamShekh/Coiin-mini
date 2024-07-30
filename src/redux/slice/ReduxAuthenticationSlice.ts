import { createSlice } from "@reduxjs/toolkit";

const initial = {
    email: '',
    password: '',
}
const ReduxAuthenticationSlice = createSlice({
    name: "ReduxAuthenticationLoginApi",
    initialState: initial,
    reducers: {
        loginUser(state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
});

export default ReduxAuthenticationSlice.reducer;
export const { loginUser } = ReduxAuthenticationSlice.actions;