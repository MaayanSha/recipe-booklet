import React, {ReactElement} from "react";
import "./../../CSS/layout_header.css";
import {MenuGroup, MenuItem} from "./MenuItem";

export const Menu = () => {
    const recipes = ['recipe1', 'recipe2', 'recipe3'];
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const menuButton = <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>;

    const items = () => {
        const array: ReactElement[] = []
        for (const recipe of recipes) {
            array.push(<MenuItem title={recipe} link={`/${recipe}`}/>);
        }
        return array;
    }

    return(
        <div>
            <h4 className="float-left-child">{menuButton}</h4>
            {isMenuOpen? <MenuGroup title={"Navigate Posts"} children={items()}/> : null}
        </div>
    )
}