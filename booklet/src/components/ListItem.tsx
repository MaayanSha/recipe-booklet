import React from "react";
import {Ingredient} from "./Features/IngredientsList";


export interface ListItemProps {
    item: string;
    ingredients: Ingredient[];
    steps: string;
}

export const ListItem = ({item, ingredients, steps}: ListItemProps) => {
    return (
        <article className="card">
            <img src={require(`../images/${item}.png`)} alt={item}/>
            <header className="recipe-title">
                <h4>{item}</h4>
            </header>
            <div className="content">
                {steps.slice(0, 100) + "..."}
            </div>
        </article>
    );
}
