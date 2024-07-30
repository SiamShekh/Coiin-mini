import { createSlice } from "@reduxjs/toolkit";

const initialStateObject = {
    isVaildatorClickedModals: false
};
const ReduxSettingSlice = createSlice({
    name: 'Setting',
    initialState: initialStateObject,
    reducers: {
        isModalsClicked: (state) => {
            state.isVaildatorClickedModals = !state.isVaildatorClickedModals
        }
    }
});

export default ReduxSettingSlice.reducer;
export const { isModalsClicked } = ReduxSettingSlice.actions;