import type { Dispatch, SetStateAction } from "react"
import type { ItechnologiesType } from "../Type/Type"


export interface TecnologiNewCardProps {
    tec: ItechnologiesType
    yourStack: ItechnologiesType[]
    setYourStack: Dispatch <SetStateAction<ItechnologiesType[]>>

}

export default function TecnologiNewCard({ tec, yourStack, setYourStack }: TecnologiNewCardProps) {

    const handleTechno = () =>{
        if(yourStack.includes(tec)){
            return 
        }else{
            const setStack = [...yourStack, tec]
            setYourStack(setStack)
            
        }
    }
    console.log(tec);
    
    return (

         <div key={tec.id} className="border border-gray-200 rounded-xl p-5">
                                <div className="flex items-center justify-between">
                                   <img src={tec.icon} alt="icon" className="w-14 h-14 object-contain" /> 

                                   <span className="border border-blue-200 bg-blue-50 text-blue-500 rounded-full px-4 py-1">{tec.badge}</span>

                                </div>
                                <h1 className="text-2xl font-bold mt-8">{tec.name}</h1>
                                <p className="text-gray-500 text-lg leading-6 mt-4">{tec.description}</p>
                                <div className="border-t border-gray-200 mt-6 pt-4 flex items-center justify-between">
                                    <span className="bg-gray-100 px-3 py-2 rounded-md">{tec.category}</span>
                                    <span className="text-gray-500">{tec.difficulty}</span>
                                    <span className="text-gray-500"> ⭐ {tec.rating}</span>
                                </div>

                                <button className="w-full bg-gray-950 text-white rounded-xl mt-6 text-lg py-2" onClick={handleTechno}>
                                    Add to Stack</button>
                            </div>
    )
}