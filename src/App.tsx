import { Suspense } from "react";
import Header from "./Component/Header"
import Navber from "./Component/Navber"

import type { ItechnologiesType } from "./Type/Type";
import Technologies from "./Component/Technologies";

const technologiesPromise = async(): Promise <ItechnologiesType[]> =>{
  const res = await fetch('./technologies-data.json')
  const data = await res.json();
  return data
}

function App() {


  return (
    <>
    <Navber/>
    <Header/>
   <Suspense fallback={<h1>Loding...</h1>}>
    <Technologies technologiesPromise={technologiesPromise()}/>
   </Suspense>

    </>
  )
}

export default App
