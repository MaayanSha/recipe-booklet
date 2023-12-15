import React, { ReactElement} from "react";
import {Link} from "react-router-dom";

type MenuItemProps = {
    title: string,
    link: `/${string}`
}

type MenuGroupProps = {
    title: string,
    children: ReactElement<MenuItemProps>[],
}

export const MenuItem = ({title, link}: MenuItemProps) => {
    return(
    <div>
        <Link to={link}>{title}</Link>
    </div>
    )}

export const MenuGroup = ({title, children}: MenuGroupProps) => {
    return(
    <div>
        <h4>{title}</h4>
        <ul className="list-group list-group-flush">
            {children.map((child) =>
                <li className="list-group-item">{child}</li>
            )}
        </ul>
    </div>
    )
}