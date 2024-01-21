import {ReactNode} from "react";
import '../CSS/layout_header.css';
import {useNavigate} from "react-router-dom";

type LayoutHeaderProps = {
    title: string,
    search: boolean,
    children?: ReactNode,
}
export const LayoutHeader = ({search, children=null}: LayoutHeaderProps) => {
    const navigate = useNavigate();
    const adminButton = <button onClick={()=> navigate("/admin")}>Admin?</button>
    return(
        <>
    <nav className="navbar fixed-top navbar-light bg-light">
        {adminButton}
        <div className="nav-item">
        {children}
        </div>
        <div className="nav-item">
            {search?
                <div className="search__container">
                <p className="search__title">
                    Find anything
                </p>
                <input className="search__input" type="text" placeholder="Search" />
            </div>
                : null}
        </div>
    </nav>
        </>
    )}