import { use } from "react";
import type { ItechnologiesType } from "../Type/Type";
import Card from "./TecnologiCard/Card";

export interface TechnologiesProps {
    technologiesPromise: Promise <ItechnologiesType[]>
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const techno = use(technologiesPromise)
    console.log(techno);
    
    return (
        <>
        <Card techno= {techno} />
        </>
    )
}

export default Technologies;