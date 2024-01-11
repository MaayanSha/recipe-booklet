import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RecipeListProps} from "../Features/RecipeList";
import {FetchRecipes} from "../Data/FetchRecipes";

const initialState: RecipeListProps = {
    recipes: []
}
const recipeInventorySlice = createSlice({
    name: "recipeInventory",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipesAsync.fulfilled,
            (state, action:PayloadAction<RecipeListProps>) => {
            state.recipes = action.payload.recipes;
        })
    }
});
export const fetchRecipesAsync = createAsyncThunk(
    'recipeInventory/fetchRecipesAsync',
    async () => {
        const recipes_raw = await FetchRecipes();
        const recipeList: RecipeListProps = {recipes: recipes_raw};
        return recipeList;
    }
)
export const recipeInventoryReducer = recipeInventorySlice.reducer;