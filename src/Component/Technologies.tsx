import { use } from "react";
import type { ItechnologiesType } from "../Type/Type";

export interface TechnologiesProps {
    technologiesPromise: Promise <ItechnologiesType[]>
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const techno = use(technologiesPromise)
    console.log(techno);
    
    return (
        <>
        
        <div>
            
        </div>
        </>
    )
}

export default Technologies;