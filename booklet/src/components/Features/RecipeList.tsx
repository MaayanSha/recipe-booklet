import React from "react";
import {ListItem, ListItemProps} from "../ListItem";
import Select from "../UI/Select";

export interface RecipeListProps {
    recipes: ListItemProps[];
}

export const RecipeList = ({recipes}: RecipeListProps) => {
    return (
        <div className="cards">
            {recipes.length != 0 && recipes.map((recipe, index) => (
                <Select.Option itemName={recipe.item}>
                    <ListItem
                        item={recipe.item}
                        steps={recipe.steps}
                        ingredients={recipe.ingredients}
                    />
                </Select.Option>
            ))}
        </div>
    );
}
