import {configureStore} from "@reduxjs/toolkit";
import {recipeInventoryReducer} from "./RecipeInventorySlice";

export const store = configureStore({
    reducer: {
        recipeInventory: recipeInventoryReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch