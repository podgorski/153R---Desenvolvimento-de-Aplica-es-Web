import { useState } from "react"

export default function Filho({ dinheiro, handleCarteira }) {

    const [desejo, _] = useState(100)
    const [mesada, setMesada] = useState(0)

    function pegarMesada(valor) {

        if (handleCarteira(valor)) {
            setMesada(mesada + valor)
        }
    }

    return (
        <div>
            <div onClick={() => { pegarMesada(desejo) }}>Pedir Mesada!</div>
            <div >Sou o Filho, e ganhei {mesada} de mesada este mes</div>
        </div>

    )
}