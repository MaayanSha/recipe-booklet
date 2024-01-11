import React from "react";
import {Ingredient, IngredientsList} from "./IngredientsList";

type RecipeProps = {
    title: string,
    ingredients: Ingredient[]
    description: string,
}
//responsible for rendering a single recipe
export const Recipe = ({title, ingredients, description}: RecipeProps) => {
    return(
        <article className="recipe">
            <h1 className="recipe-title">{title}</h1>
            <div className="recipe-ingredients">
                <h2 className="recipe-ingredients-title">Ingredients:</h2>
                <IngredientsList ingredients={ingredients} />
            </div>
            <div className="recipe-description">
                <h2 className="recipe-description-title">Preparation:</h2>
                <p className="recipe-description-text">{description}</p>
            </div>
        </article>
    )
}