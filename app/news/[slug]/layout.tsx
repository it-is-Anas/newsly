import { ReactNode } from "react";


export default function LayoutHere({children,modal}:{children: ReactNode,modal: ReactNode}){
    return (
        <>  
            { modal }
            {children}
        </>
    );
}