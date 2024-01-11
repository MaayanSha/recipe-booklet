import React from "react";

export interface IngredientsListProps {
    ingredients: Ingredient[];
}

export interface Ingredient{
    ingredient: IngredientsInventory
    quantity: number;
}

export interface IngredientsInventory{
    name: string;
    gram_to_cup: number;
}

//responsible for rendering a single ingredient
const Ingredient = ({ingredient, quantity}: Ingredient) => {
    return (
        <div className="ingredient" key={ingredient.name}>
            <div className="ingredient-name">
                {ingredient.name}
            </div>
            <div className="ingredient-quantity">
                {quantity}
            </div>
            <div className="ingredient-unit">
                {ingredient.gram_to_cup}
            </div>
        </div>
    );
}
//responsible for rendering the list of ingredients
export const IngredientsList = ({ingredients}: IngredientsListProps) => {
    return (
        <div className="ingredients-list">
            {ingredients.map((ingredient) => (
                <Ingredient
                    ingredient={ingredient.ingredient}
                    quantity={ingredient.quantity} />
            ))}
        </div>
    );
}