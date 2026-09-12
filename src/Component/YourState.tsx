
import type { Dispatch, SetStateAction } from "react";

import { X } from "lucide-react";
import type { ItechnologiesType } from "../Type/Type";

export interface YourStackProps {
    yourStack: ItechnologiesType[];
    setYourStack : Dispatch<SetStateAction<ItechnologiesType[]>>;

}

export default function YourStack({ yourStack, setYourStack }: YourStackProps) {

    const removeAll = () => {
        setYourStack([])
    }

    const removeTechnology = (id: string) => {
        
        const remainig = [...yourStack].filter((tech) => tech.id !== id)
        setYourStack(remainig)

    }


    
    return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">
          Your Stack
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {yourStack.length === 0
            ? "No technologies selected yet."
            : `${yourStack.length} Technology${
                yourStack.length > 1 ? "s" : ""
              } Selected`}
        </p>
      </div>

      
      {yourStack.length === 0 ? (
        <div className="flex min-h-27.5 items-center justify-center rounded-2xl border border-dashed border-slate-200">
          <p className="text-sm text-slate-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          
          <div className="space-y-2">
            {yourStack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3"
              >
                
                <div className="flex items-center gap-3">
                  
                  
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {technology.name}
                    </h3>

                    <p className="text-[10px] text-slate-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                
                <button
                  onClick={() => removeTechnology(technology.id)}
                  className="text-slate-400 transition hover:text-red-500"
                >
                  <X size={20} className="cursor-pointer" />
                </button>
              </div>
            ))}
          </div>

          
          <button
            onClick={removeAll}
            className="mt-5 w-full rounded-xl border border-red-200 py-2.5 text-[18px]  text-red-500 transition hover:bg-red-50 font-bold cursor-pointer"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}