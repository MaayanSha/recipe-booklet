import React, {ReactNode} from "react";

// type PageProps = {
//     children: ReactNode,
// }
// export const Page = ({children} : PageProps) => {
//     return(
//         <div className="page-item">
//             {children}
//         </div>
//     )
// }

export interface PageProps {
    children?: any,
}