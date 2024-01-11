import React from "react";
import axios from "axios";
import {Ingredient, IngredientsInventory} from "../Features/IngredientsList";


const FetchIngredients = async () => {
    const response = await axios.get('http://localhost:3500/ingredients');
    return response.data;
}
export const getIngredientInventory = () => {
    const ingredients: IngredientsInventory[] = []
    FetchIngredients().then((ingredients_raw) => {
        return ingredients_raw.map((ingredient: { name: string; gram_to_cup: number; }) => {
            ingredients.push({
                name: ingredient.name,
                gram_to_cup: ingredient.gram_to_cup
            });
        });
    });
    return ingredients;
}