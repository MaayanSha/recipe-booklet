import {ReactNode} from "react";
import '../CSS/layout_header.css';

type LayoutHeaderProps = {
    title: string,
    search: boolean,
    children?: ReactNode,
}
export const LayoutHeader = ({title, search, children=null}: LayoutHeaderProps) => {
    return(
    <div className="parent">
        <div className="child">
            {children}
        </div>
        <h4 className="child">
        {title}
        {search? <input type="text" placeholder="Search" /> : null}
        </h4>
    </div>
    )}