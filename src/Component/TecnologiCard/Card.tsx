import type { useState } from "react"
import type { ItechnologiesType } from "../../Type/Type"
import YourStack from "../YourState"

export interface CardProps {
    techno: ItechnologiesType[]
}

export default function Card({ techno }: CardProps) {
    const [yourStack, setYourSack] = useState<Technology[]>([]);
    
    return (
        <>
      
        <div className="container mx-auto mt-20">
            <div>
                <h1 className="text-5xl">Explore the <span className="text-[#d44db0]">Technologies</span></h1>
                <p className="text-[#475569]">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-10">
                <div className=" col-span-9 grid grid-cols-1  md:grid-cols-3 gap-6">
                {
                    techno.map((techno) =>{
                        return(
                            <div key={techno.id} className="border border-gray-200 rounded-xl p-5">
                                <div className="flex items-center justify-between">
                                   <img src={techno.icon} alt="icon" className="w-14 h-14 object-contain" /> 

                                   <span className="border border-blue-200 bg-blue-50 text-blue-500 rounded-full px-4 py-1">{techno.badge}</span>

                                </div>
                                <h1 className="text-2xl font-bold mt-8">{techno.name}</h1>
                                <p className="text-gray-500 text-lg leading-6 mt-4">{techno.description}</p>
                                <div className="border-t border-gray-200 mt-6 pt-4 flex items-center justify-between">
                                    <span className="bg-gray-100 px-3 py-2 rounded-md">{techno.category}</span>
                                    <span className="text-gray-500">{techno.difficulty}</span>
                                    <span className="text-gray-500"> ⭐ {techno.rating}</span>
                                </div>

                                <button className="w-full bg-gray-950 text-white rounded-xl mt-6 text-lg py-2 ">
                                    Add to Stack</button>
                            </div>
                        )
                    } )
                }

                </div>
                <div className="col-span-3 border border-gray-200 rounded-xl p-5 ">

                    <YourStack  yourStack ={yourStack} setYourSack ={setYourSack}/>
                    
                </div>
            
            </div>
            
        </div>
        
        </>
    )
}