import { Outlet } from "react-router-dom";
import React, {JSX, ReactComponentElement, ReactNode} from "react";
import {LayoutHeader} from "./LayoutHeader";
import {LayoutFooter} from "./LayoutFooter";
import {Menu} from "./Fixed/Menu";
import "../CSS/content.css";

type LandingProps = {
    children: ReactNode
}
export default function Layout({children}: LandingProps) {
    return (
        <>
        <LayoutHeader title={"baking made easy"} search={true} children={<Menu />} />
        <div>
            {children}
        </div>
        </>
    );
}