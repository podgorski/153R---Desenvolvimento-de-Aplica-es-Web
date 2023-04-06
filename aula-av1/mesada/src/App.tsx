import { useState } from "react";
import Avo from "./components/Avo";

export default function App() {

  const [saque, _] = useState(1000)

  return (
    <>

      <Avo nome={"Raul"} sobrenome={"Pompeo"} dinheiro={saque}></Avo>

    </>
  )
}
