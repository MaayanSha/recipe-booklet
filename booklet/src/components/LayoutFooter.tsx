import {ReactNode} from "react";

type LayoutFooterProps = {
    text: string,
    children?: ReactNode,
}
export const LayoutFooter = ({text, children=null}: LayoutFooterProps) => {
    return(
        <div className="parent">
            <div className="child">
            {text}
            </div>
            {children}
        </div>
    )}