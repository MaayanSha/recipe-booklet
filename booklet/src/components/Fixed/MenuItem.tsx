import React, { ReactElement} from "react";
import {Link} from "react-router-dom";
import "./../../CSS/layout_header.css";

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
    <div className="menu-content">
        {children.map((child) =>
            <a className="list-inline">{child}</a>
        )}
    </div>
    )
}