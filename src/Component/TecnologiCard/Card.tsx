import { useState } from "react"
import type { ItechnologiesType } from "../../Type/Type"
import YourStack from "../YourState"
import TecnologiNewCard from "../TecnologiNewCard";

export interface CardProps {
    techno: ItechnologiesType[]
}

export default function Card({ techno }: CardProps) {
    const [yourStack, setYourStack] = useState<ItechnologiesType[]>([]);


    return (
        <>
      
        <div className="container mx-auto mt-20">
            <div>
                <h1 className="text-5xl">Explore the <span className="text-[#d44db0]">Technologies</span></h1>
                <p className="text-[#475569]">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid lg:grid-cols-12 gap-4 mt-10">
                <div className=" col-span-9 grid grid-cols-1  md:grid-cols-3 gap-6">
                {
                    techno.map((tec) => <TecnologiNewCard tec={tec} yourStack ={yourStack} setYourStack ={setYourStack}/>)
                        
                    
                }

                </div>
                <div className="col-span-3 border border-gray-200 rounded-xl p-5 ">

                    <YourStack  yourStack ={yourStack} setYourStack ={setYourStack}/>
                    
                </div>
            
            </div>
            
        </div>
        
        </>
    )
}