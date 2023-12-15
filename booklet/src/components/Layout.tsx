import { Outlet } from "react-router-dom";
import {ReactNode} from "react";
import {LayoutHeader} from "./LayoutHeader";
import {LayoutFooter} from "./LayoutFooter";
import {Menu} from "./Fixed/Menu";

type LandingProps = {
    children: ReactNode,
}
export default function Layout({children}: LandingProps) {
    return (
        <>
        <LayoutHeader title={"baking made easy"} search={true} children={<Menu />} />
        <div>
            {children}
        </div>
        <LayoutFooter text={"all rights reserved"} />
        </>
    );
}