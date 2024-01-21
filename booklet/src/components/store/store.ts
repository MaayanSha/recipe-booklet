import {configureStore} from "@reduxjs/toolkit";
import {recipeInventoryReducer} from "./RecipeInventorySlice";
import {adminModeReducer} from "./AdminModeSlice";

export const store = configureStore({
    reducer: {
        recipeInventory: recipeInventoryReducer,
        adminMode: adminModeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch