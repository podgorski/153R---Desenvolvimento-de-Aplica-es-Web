import { useState } from "react"
import Pai from "../Pai"

export default function Avo({ nome, sobrenome, dinheiro }) {

    const [aposentadoria, setAposentadoria] = useState(dinheiro)

    function handleCarteira(valor) {
        if (valor <= aposentadoria) {
            setAposentadoria(aposentadoria - valor)
            return true
        }

    }

    return (
        <>
            <div>
                <h1>Avo {nome} {sobrenome} tem {aposentadoria} reais!</h1>
                <Pai dinheiro={aposentadoria} handleCarteira={handleCarteira}></Pai>
            </div>
        </>
    )
}
