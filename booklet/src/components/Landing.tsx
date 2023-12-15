import react, {ReactElement, ReactNode} from "react";

type LandingProps = {
    frame?: ReactNode,
    children: ReactNode,
}
export const Landing = ({frame = null, children}: LandingProps) => {
    return(
        <div>
            {frame}
            {children}
        </div>
    )}