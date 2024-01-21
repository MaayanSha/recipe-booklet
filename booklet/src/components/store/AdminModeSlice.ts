import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    adminMode: false,
    adminUser: "admin",
    adminKey: "1234"
}

const adminModeSlice = createSlice({
    name: "adminMode",
    initialState,
    reducers:{
        setAdminMode: (state, action:PayloadAction<string>) => {
            if (action.payload === state.adminKey){
                state.adminMode = true;
            }
        },
        unsetAdminMode: (state, action:PayloadAction<string>) => {
            if (action.payload === state.adminKey){
                state.adminMode = false;
            }
        }
    },
})

export const adminModeReducer = adminModeSlice.reducer;
export const {setAdminMode, unsetAdminMode} = adminModeSlice.actions;