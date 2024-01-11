import React, {useEffect} from "react";
import {Recipe} from "../Features/Recipe";
import {PageProps} from "../Page";
import {RecipeList} from "../Features/RecipeList";
import Select from "../UI/Select";
import {Menu} from "../Fixed/Menu";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {fetchRecipesAsync} from "../store/RecipeInventorySlice";

export const RecipePage = () => {
    const recipes = useSelector((state: RootState) => state.recipeInventory.recipes);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchRecipesAsync());
    },[]);
    return(
        <Select source={"inventory"} className={"inventory-select"}>
            <RecipeList recipes={recipes}/>
        </Select>
    )
}